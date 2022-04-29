package MonVoyage.hotels;

import MonVoyage.room.RoomsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/hotel")
public class HotelController {
    @Autowired
    HotelsRepository hotelsRepository;
    @Autowired
    RoomsRepository roomsRepository;
    
   

    @PostMapping("/addHotel")
    public ResponseEntity addHotel(@RequestBody Hotel hotel) {
        try {
            hotelsRepository.save(hotel);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping("/removeHotel/{id}")
    public void removeHotel(@PathVariable("id") int id) {
        hotelsRepository.deleteById(id);
    }
}
// TODO
