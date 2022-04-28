package MonVoyage.bookings;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/booking")
public class BookingController {
    @Autowired
    BookingsRepository bookingsRepository;

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
}
// TODO
