package MonVoyage.users;

import com.sun.deploy.nativesandbox.comm.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.sun.corba.se.impl.util.Utility.printStackTrace;

@RestController
@RequestMapping("/users")
public class UsersController {
    @Autowired
    UsersRepository usersRepository;

    @GetMapping("/addUser")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        try {
            usersRepository.save(user);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(HttpStatus.OK);
    }


    @DeleteMapping("/removeUser/{id}")
    public void removeUser(@PathVariable("userId") int userId) {
        usersRepository.deleteById(userId);
    }
}
// TODO
