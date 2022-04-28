package MonVoyage.hotels.room;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomsRepository extends CrudRepository<Room, Integer> {
    void deleteById(int id);
}
// TODO
