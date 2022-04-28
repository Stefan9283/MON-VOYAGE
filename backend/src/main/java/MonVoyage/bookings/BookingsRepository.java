package MonVoyage.bookings;

import MonVoyage.hotels.Hotel;
import MonVoyage.users.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingsRepository extends CrudRepository<Booking, Integer> {
    List<Booking> findByClient(User client);
}
// TODO
