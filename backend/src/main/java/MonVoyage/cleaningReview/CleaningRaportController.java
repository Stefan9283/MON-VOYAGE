package MonVoyage.cleaningReview;

import MonVoyage.bookings.Booking;
import MonVoyage.exceptions.CleaningRaportNotFound;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// TODO not tested!
@RestController
@RequestMapping("/cleaningRaport")
public class CleaningRaportController {
    @Autowired
    CleaningRaportRepository cleaningRaportRepository;

    @PostMapping
    public ResponseEntity addCleaningRaport(@RequestBody CleaningRaport cleaningRaport) {
        try {
            cleaningRaportRepository.save(cleaningRaport);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/{roomId}/{hotelId}")
    public CleaningRaport getCleaningRaportForRoom(@PathVariable("roomId") int roomId,
                                                   @PathVariable("hotelId") int hotelId)
            throws CleaningRaportNotFound {
        CleaningRaport cleaningRaport = cleaningRaportRepository
                .findCleaningRaportByRoomIdAndHotelId(roomId, hotelId);
        if (cleaningRaport == null)
            throw new CleaningRaportNotFound("Cleaning raport fot this room does not exist.");
        else
            return cleaningRaport;
    }

    @DeleteMapping("/{roomId}/{hotelId}")
    public ResponseEntity deleteCleaningRaport(@PathVariable("roomId") int roomId,
                                               @PathVariable("hotelId") int hotelId) {
        try {
            cleaningRaportRepository.deleteCleaningRaportByRoomIdAndHotelId(roomId, hotelId);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(HttpStatus.OK);
    }
}
