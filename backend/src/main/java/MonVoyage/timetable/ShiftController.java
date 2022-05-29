package MonVoyage.timetable;

import MonVoyage.hotels.Hotel;
import MonVoyage.hotels.HotelsRepository;
import MonVoyage.security.Role;
import MonVoyage.users.User;
import MonVoyage.users.UsersRepository;
import MonVoyage.security.ERole;
import MonVoyage.utils.exceptions.InvalidUserType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/shift")
public class ShiftController {
    @Autowired
    ShiftsRepository shiftsRepository;

    @Autowired
    UsersRepository usersRepository;

    @Autowired
    HotelsRepository hotelsRepository;

    @PostMapping("/addShift/{hotelId}/{userId}")
    public ResponseEntity<String> addShift(@PathVariable("hotelId") int hotelId, @PathVariable("userId") int userId, @RequestBody List<String> dateString) {
        if(dateString.size() != 2)
            return new ResponseEntity<>("Please put 2 dates in the list", HttpStatus.BAD_REQUEST);
        SimpleDateFormat dates = new SimpleDateFormat("dd-MM-yyyy h:mm a");

        try {
            Date start_date = dates.parse(dateString.get(0));
            Date end_date = dates.parse(dateString.get(1));

            User user = usersRepository.findById(userId);
            Hotel hotel = hotelsRepository.findHotelById(hotelId);

            if (user == null)
                return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
            if (hotel == null)
                return new ResponseEntity<>("Hotel not found", HttpStatus.NOT_FOUND);

            Shift s = new Shift(start_date, end_date, user, hotel);
            shiftsRepository.save(s);

            return new ResponseEntity<>("Added!", HttpStatus.OK);
        } catch (ParseException e) {
            return new ResponseEntity<>("Invalid date format", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/timetable/{user_type}/{hotelId}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('JANITOR') or " +
            "hasRole('RECEPTIONIST') or hasRole('ACCOUNTANT') or hasRole('MANAGER')")
    public Object getTimetableByUserType(@PathVariable("hotelId") int hotelId,
                               @PathVariable("user_type") String usertype,
                               @RequestBody List<String> dateString) {
        if(dateString.size() != 2)
            return new ResponseEntity<>("Please put 2 dates in the list", HttpStatus.BAD_REQUEST);

        SimpleDateFormat dates = new SimpleDateFormat("dd-MM-yyyy h:mm a");

        try {
            Date start_date = dates.parse(dateString.get(0));
            Date end_date = dates.parse(dateString.get(1));

            usertype = usertype.toUpperCase();
            ERole ut = ERole.getType(usertype);

            return shiftsRepository.findShiftBetweenDatesWithSpecificRole(hotelId, start_date, end_date, new Role(ut));
        } catch (ParseException e) {
            return new ResponseEntity<>("Invalid date format", HttpStatus.BAD_REQUEST);
        } catch (InvalidUserType e) {
            return new ResponseEntity<>("Invalid user type", HttpStatus.BAD_REQUEST);
        }
    }
}

