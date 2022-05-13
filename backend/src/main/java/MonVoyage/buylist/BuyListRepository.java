package MonVoyage.buylist;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BuyListRepository extends CrudRepository<BuyList, Integer> {
    BuyList findBuyListByRoomNumberAndHotelId(int roomNumber, int hotelId);
    void deleteBuyListByRoomNumberAndHotelId(int roomNumber, int hotelId);
}
