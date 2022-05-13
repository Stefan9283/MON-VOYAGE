package MonVoyage.cleaningReview;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CleaningReportRepository extends CrudRepository<CleaningReport, Integer> {
    CleaningReport findCleaningReportByRoomIdAndHotelId(int roomId, int hotelId);
    void deleteCleaningReportByRoomIdAndHotelId(int roomId, int hotelId);
}
