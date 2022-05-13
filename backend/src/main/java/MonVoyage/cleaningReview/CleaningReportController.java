package MonVoyage.cleaningReview;

import MonVoyage.utils.exceptions.CleaningReportNotFound;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// TODO work more !
// this should be accessed by the cleaning man and by the storekeeper
@RestController
@RequestMapping("/cleaningReport")
public class CleaningReportController {
    @Autowired
    CleaningReportRepository cleaningReportRepository;

    @PostMapping
    public ResponseEntity<HttpStatus> addCleaningReport(@RequestBody CleaningReport cleaningReport) {
        try {
            cleaningReportRepository.save(cleaningReport);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{roomId}/{hotelId}")
    public CleaningReport getCleaningReportForRoom(@PathVariable("roomId") int roomId,
                                                   @PathVariable("hotelId") int hotelId)
            throws CleaningReportNotFound {
        CleaningReport cleaningReport = cleaningReportRepository
                .findCleaningReportByRoomIdAndHotelId(roomId, hotelId);
        if (cleaningReport == null)
            throw new CleaningReportNotFound("Cleaning Report fot this room does not exist.");
        else
            return cleaningReport;
    }

    @DeleteMapping("/{roomId}/{hotelId}")
    public ResponseEntity<HttpStatus> deleteCleaningReport(@PathVariable("roomId") int roomId,
                                               @PathVariable("hotelId") int hotelId) {
        try {
            cleaningReportRepository.deleteCleaningReportByRoomIdAndHotelId(roomId, hotelId);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
