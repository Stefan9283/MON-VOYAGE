package MonVoyage.users;

import MonVoyage.bookings.BookingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.http.HTTPBinding;

@RestController
@RequestMapping("/users")
public class UsersController {
    @Autowired
    UsersRepository usersRepository;

    @Autowired
    BookingsRepository bookingsRepository;

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
            {
                // TODO instead of this auto-increment the id of the user
                //  (the same thing for every other class)
                if (usersRepository.findById(user.getId()) != null) {
                    status = HttpStatus.BAD_REQUEST;
                    throw new Exception("User with the same id already exists");
                }
            }

            usersRepository.save(user);
        } catch (Exception e) {
            status = HttpStatus.BAD_REQUEST;
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), status);
        }
        return new ResponseEntity<String>(HttpStatus.OK);
    }

    @DeleteMapping("/removeUser/{id}")
    public ResponseEntity<String> removeUser(@PathVariable("id") int userId) {
        try {
            usersRepository.deleteById(userId);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<String>(HttpStatus.OK);
    }

    @PutMapping("/modify/{id}/{field}")
    public String modifyFieldInUser(@PathVariable("field") String field,
            @PathVariable("id") int id, @RequestBody String modifyWith) {

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
