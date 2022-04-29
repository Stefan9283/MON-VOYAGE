package MonVoyage.room;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/room")
public class RoomController {
    @Autowired
    RoomsRepository roomsRepository;

    @PostMapping("/addRoom")
    public ResponseEntity addRoom(@RequestBody Room room) {
        try {
            roomsRepository.save(room);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping("/removeRoom/{id}")
    public void removeRoom(@PathVariable("id") int id) {
        roomsRepository.deleteById(id);
    }
}
