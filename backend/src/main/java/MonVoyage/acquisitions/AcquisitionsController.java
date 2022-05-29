package MonVoyage.acquisitions;

import MonVoyage.utils.exceptions.BuyListNotFound;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

// TODO this should only be accessed by the storekeeper
@RestController
@RequestMapping("/acquisitions")
public class AcquisitionsController {
    @Autowired
    AcquisitionsRepository acquisitionsRepository;

    @PreAuthorize("hasRole('ADMIN') or hasRole('MANAGER') or hasRole('RECEPTIONIST') or hasRole('ACCOUNTANT')")
    @PostMapping
    public ResponseEntity<HttpStatus> addBuyList(@RequestBody Acquisitions acquisitions) {
        try {
            acquisitionsRepository.save(acquisitions);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN') or hasRole('MANAGER') or hasRole('RECEPTIONIST') or hasRole('ACCOUNTANT')")
    @GetMapping("/{roomId}/{hotelId}")
    public Acquisitions getBuyListForRoom(@PathVariable("roomId") int roomId,
                                          @PathVariable("hotelId") int hotelId)
            throws BuyListNotFound {
        Acquisitions acquisitions = acquisitionsRepository
                .findBuyListByRoomNumberAndHotelId(roomId, hotelId);
        if (acquisitions == null)
            throw new BuyListNotFound("BuyLists fot this room does not exist.");
        else
            return acquisitions;
    }

    @PreAuthorize("hasRole('ADMIN') or hasRole('MANAGER') or hasRole('RECEPTIONIST') or hasRole('ACCOUNTANT')")
    @DeleteMapping("/{roomId}/{hotelId}")
    public ResponseEntity<HttpStatus> deleteBuyList(@PathVariable("roomId") int roomId,
                                               @PathVariable("hotelId") int hotelId) {
        try {
            acquisitionsRepository.deleteBuyListByRoomNumberAndHotelId(roomId, hotelId);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
