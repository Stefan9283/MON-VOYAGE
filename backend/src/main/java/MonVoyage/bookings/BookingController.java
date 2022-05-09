package MonVoyage.bookings;

import MonVoyage.room.Room;
import MonVoyage.room.RoomsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
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
    // checks if there are free rooms first
    public ResponseEntity addBooking(@RequestBody Booking booking) {
        if (numberOfFreeRooms(booking.getStartDate(), booking.getEndDate(), booking.getHotelId()) <= 0)
            return new ResponseEntity(HttpStatus.FORBIDDEN);
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

        SimpleDateFormat dates = new SimpleDateFormat("dd-MM-yyyy");
        int nrOfFreeRooms = numberOfFreeRooms(dates.parse(dateString.get(0)), dates.parse(dateString.get(1)), hotelId);

        if(nrOfFreeRooms <= 0)
            return "No room available in that period at the hotel";

        return "There are " +
                nrOfFreeRooms +
                " free rooms at the requested hotel for that period";
    }

    // returns the number of free rooms at a hotel
    public int numberOfFreeRooms(Date startDate, Date endDate, int hotelId) {
        List<Room> roomsAtHotel = roomsRepository.findRoomsByHotelId(hotelId);
        SimpleDateFormat dates = new SimpleDateFormat("dd-MM-yyyy");

        List<Booking> bookings =
                bookingsRepository.findBookingsByHotelIdWithIntersections(
                        hotelId,
                        startDate,
                        endDate);

        return roomsAtHotel.size() - bookings.size();
    }

    @GetMapping("getBookings/{clientId}")
    public List<Booking> getBookingsOf(@PathVariable("clientId") int clientId) {
        List<Booking> bookings =  bookingsRepository.findBookingsByClientId(clientId);

        return bookings;
    }
}


// TODO
