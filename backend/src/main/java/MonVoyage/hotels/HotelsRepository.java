package MonVoyage.hotels;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelsRepository extends CrudRepository<Hotel, Integer> {
    void deleteById(int id);
    Hotel findHotelById(int id);
}
// TODO