package MonVoyage.bookings;

import MonVoyage.room.Room;
import MonVoyage.room.RoomsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/booking")
public class BookingController {
    @Autowired
    BookingsRepository bookingsRepository;

    @Autowired
    RoomsRepository roomsRepository;

    @PostMapping("/addBooking")
    public ResponseEntity addBooking(@RequestBody Booking booking) {
        try {
            bookingsRepository.save(booking);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping("/removeBooking/{id}")
    public void removeBooking(@PathVariable("id") int id) {
        bookingsRepository.deleteById(id);
    }

    @GetMapping("/freeRoomsAt/{hotelId}")
    public String freeRooms(@PathVariable("hotelId") int hotelId, @RequestBody List<String> dateString) throws ParseException {
        // the body will contain a list of 2 dates, start date of the period and end date of the period
        if(dateString.size() != 2)
            return "Please put 2 dates in the list";

        List<Room> roomsAtHotel = roomsRepository.findRoomsByHotelId(hotelId);
        SimpleDateFormat dates = new SimpleDateFormat("dd-mm-yyyy");

        List<Booking> bookings =
                bookingsRepository.findBookingsByHotelIdAndStartDateBeforeOrEndDateAfter(hotelId,
                        dates.parse(dateString.get(0)), dates.parse(dateString.get(1)));

        if(roomsAtHotel.size() <= bookings.size())
            return "No room available in that period at the hotel";

        return "There are " +
                (roomsAtHotel.size() - bookings.size()) +
                " free rooms at the requested hotel for that period";
    }
}
// TODO
