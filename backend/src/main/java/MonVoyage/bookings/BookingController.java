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
    // TODO check why this doesn't work????????
    public String freeRooms(@PathVariable("hotelId") int hotelId, @RequestBody List<String> dateString) throws ParseException {
        // the body will contain a list of 2 dates, start date of the period and end date of the period
        StringBuilder sb = new StringBuilder();
        if(dateString.size() == 2) {
            List<Room> roomsAtHotel = roomsRepository.findRoomsByHotelId(hotelId);
            SimpleDateFormat dates = new SimpleDateFormat("dd-mm-yyyy");

            List<Booking> bookings = bookingsRepository.findBookingsByHotelId(hotelId);
            //.findBookingsByHotelIdAndStartDateBeforeAndEndDateAfter(hotelId, dates.parse(dateString.get(0)),
//                            dates.parse(dateString.get(1)));
            List<Booking> bookingsBetween = new ArrayList<>();
            for(int i = 0; i < bookings.size(); i++) {
                if(bookings.get(i).getStartDate().after(dates.parse(dateString.get(0))) &&
                                bookings.get(i).getEndDate().before(dates.parse(dateString.get(1)))) {
                    bookingsBetween.add(bookings.get(i));
                }
//
            }
//
            if(bookingsBetween.isEmpty()) {
                sb.append("e null nu mai incerca");
            } else {
                sb.append("nu e null");
            }
            for(Booking b : bookingsBetween) {
                System.out.println(b.getStartDate() + " start si end -> " + b.getEndDate());
            }
            if(roomsAtHotel.size() > bookingsBetween.size()) {

                sb.append("There are ");
                sb.append(roomsAtHotel.size() - bookingsBetween.size());
                sb.append(" free rooms at the requested hotel for that period");
                return sb.toString();
            } else {
                sb.append( "No room available in that period at the hotel");
            }

        } else {
            sb.append("Please put 2 dates in the list");
        }
        return sb.toString();
    }
}
// TODO
