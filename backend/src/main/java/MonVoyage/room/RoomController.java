package MonVoyage.room;

import MonVoyage.hotels.HotelsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/room")
public class RoomController {
    @Autowired
    RoomsRepository roomsRepository;

    @Autowired
    HotelsRepository hotelsRepository;

    @PreAuthorize("hasRole('ADMIN') or hasRole('RECEPTIONIST') or hasRole('MANAGER')")
    @PostMapping("/addRoom")
    public ResponseEntity<String> addRoom(@RequestBody Room room) {
        try {
            roomsRepository.save(room);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN') or hasRole('RECEPTIONIST') or hasRole('MANAGER')")
    @PostMapping("changeFeatures/{room_id}/{feature}/{state}")
    public ResponseEntity<String> changeFeature(
            @PathVariable("room_id")    int     roomId,
            @PathVariable("feature")    String  feature,
            @PathVariable("state")      boolean state
    ) {
        Room room = roomsRepository.findById(roomId);

        feature = feature.toLowerCase();

        switch (feature) {
            case "ac":
                room.setAc(state);
                break;
            case "tv":
                room.setTv(state);
                break;
            case "view":
                room.setNiceView(state);
                break;
            case "matrimonial":
                room.setMatrimonial(state);
                break;
            case "smoker":
                room.setSmokerRoom(state);
                break;
            case "hairdresser":
                room.setBlowDryer(state);
                break;
            default:
                return new ResponseEntity<>("Invalid feature", HttpStatus.BAD_REQUEST);
        }

        roomsRepository.save(room);
        return new ResponseEntity<>("Changed! :)", HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN') or hasRole('RECEPTIONIST') or hasRole('MANAGER')")
    @DeleteMapping("/removeRoom/{id}")
    public void removeRoom(@PathVariable("id") int id) {
        roomsRepository.deleteById(id);
    }
}
