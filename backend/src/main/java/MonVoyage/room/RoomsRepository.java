package MonVoyage.room;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomsRepository extends CrudRepository<Room, Integer> {
    void deleteById(int id);

    List<Room> findRoomsByHotelId(int id);
}
// TODO
