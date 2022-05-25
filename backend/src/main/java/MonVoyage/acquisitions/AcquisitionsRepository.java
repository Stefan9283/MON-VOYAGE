package MonVoyage.acquisitions;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AcquisitionsRepository extends CrudRepository<Acquisitions, Integer> {
    Acquisitions findBuyListByRoomNumberAndHotelId(int roomNumber, int hotelId);
    void deleteBuyListByRoomNumberAndHotelId(int roomNumber, int hotelId);
}
