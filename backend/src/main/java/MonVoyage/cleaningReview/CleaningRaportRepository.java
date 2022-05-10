package MonVoyage.cleaningReview;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CleaningRaportRepository extends CrudRepository<CleaningRaport, Integer> {
    CleaningRaport findCleaningRaportByRoomIdaAndHotelId(int roomId, int hotelId);
    void deleteCleaningRaportByRoomIdAndHotelId(int roomId, int hotelId);
}
