package MonVoyage.users;

import MonVoyage.bookings.BookingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UsersController {
    @Autowired
    UsersRepository usersRepository;

    @Autowired
    BookingsRepository bookingsRepository;

    // TODO make bookings from user

    @PostMapping("/addUser")
    public ResponseEntity addUser(@RequestBody User user) {
        try {
            usersRepository.save(user);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping("/removeUser/{id}")
    public void removeUser(@PathVariable("id") int userId) {
        usersRepository.deleteById(userId);
    }

    @PostMapping("/modify/{id}/{field}")
    public String modifyFieldInUser(@PathVariable("field") String field, @PathVariable("id") int id,
            @RequestBody String modifyWith) {

        User user = usersRepository.findById(id);
        if(field.equals("username"))
            user.setUsername(modifyWith);
        else if (field.equals("passhash"))
            user.setPasshash(modifyWith);
        else if (field.equals("email"))
            user.setEmail(modifyWith);
        else if (field.equals("type"))
            user.setType(modifyWith);
        else
            return "Wrong field!";

        usersRepository.deleteById(id);
        usersRepository.save(user);
        return "User updated!";
    }

}
// TODO
