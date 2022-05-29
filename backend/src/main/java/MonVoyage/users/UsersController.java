package MonVoyage.users;

import MonVoyage.bookings.Booking;
import MonVoyage.bookings.BookingsRepository;
import MonVoyage.hotels.Hotel;
import MonVoyage.hotels.HotelsRepository;
import MonVoyage.reviews.Review;
import MonVoyage.reviews.ReviewsRepository;
import MonVoyage.room.Room;
import MonVoyage.room.RoomsRepository;
import MonVoyage.security.ERole;
import MonVoyage.security.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UsersController {
    @Autowired
    UsersRepository usersRepository;

    @Autowired
    BookingsRepository bookingsRepository;

    @Autowired
    RoomsRepository roomsRepository;

    @Autowired
    HotelsRepository hotelsRepository;

    @Autowired
    ReviewsRepository reviewsRepository;
    // TODO make bookings from user

    @PostMapping("/addUser")
    public ResponseEntity<String> addUser(@RequestBody User user) {
        HttpStatus status = HttpStatus.OK;
        try {
            {
                if (usersRepository.findByEmail(user.getEmail()) != null) {
                    status = HttpStatus.BAD_REQUEST;
                    throw new Exception("User with the same email already exists");
                }
            }

            usersRepository.save(user);
        } catch (Exception e) {
            status = HttpStatus.BAD_REQUEST;
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), status);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/removeUser/{id}")
    public ResponseEntity<String> removeUser(@PathVariable("id") int userId) {
        try {
            usersRepository.deleteById(userId);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/modify/{id}/{field}")
    public String modifyFieldInUser(@PathVariable("field") String field,
                                    @PathVariable("id") int id, @RequestBody String modifyWith) {

        User user = usersRepository.findById(id);
        if (field.equals("username"))
            user.setUsername(modifyWith);
        else if (field.equals("password"))
            user.setPassword(modifyWith);
        else if (field.equals("email"))
            user.setEmail(modifyWith);
        else if (field.equals("addRole")) {
            Role role = new Role(ERole.valueOf(modifyWith.toUpperCase()));
            user.addRole(role);
        } else if (field.equals("removeRole")) {
            Role role = new Role(ERole.valueOf(modifyWith.toUpperCase()));
            user.removeRole(role);
        } else
            return "Wrong field!";

        usersRepository.save(user);
        return "User updated!";
    }

    // this method receives the start and the  end date
    // TODO this should be accessed only by the receptionist, the app user and the manager
    @PostMapping("/userMakesBooking/{mail}/{hotelId}")
    public String makeBooking(
                @RequestBody List<String> dateString, 
                @PathVariable("mail") String mail,
                @PathVariable("hotelId") int hotelId) throws ParseException {
        // user should add only the dates and the mail
        User user = usersRepository.findByEmail(mail);
        if (user == null)
            return "No user with such mail!";

        Hotel hotel = hotelsRepository.findHotelById(hotelId);
        if (hotel == null)
            return "No hotel with such id!";

        SimpleDateFormat dates = new SimpleDateFormat("dd-MM-yyyy");
        List<Booking> bookings =
                bookingsRepository.findBookingsByHotelIdWithIntersections(
                        hotelId,
                        dates.parse(dateString.get(0)),
                        dates.parse(dateString.get(1))
                );
        List<Room> roomsAtHotel = roomsRepository.findRoomsByHotelId(hotelId);

        if (roomsAtHotel.size() > bookings.size()) {
            Booking booking = new Booking();
            booking.setEndDate(dates.parse(dateString.get(1)));
            booking.setStartDate(dates.parse(dateString.get(0)));
            booking.setClient(user);
            booking.setHotel(hotel);

            bookingsRepository.save(booking);
        } else {
            return "No available rooms in that period!";
        }

        return "Booking has been registered!";
    }

    // TODO only the user should add reviews
    @PostMapping("/addReview")
    public ResponseEntity<String> addReviews(@RequestBody Review review) {
        HttpStatus status;
        try {
            reviewsRepository.save(review);
        } catch (Exception e) {
            status = HttpStatus.BAD_REQUEST;
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), status);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
// TODO
