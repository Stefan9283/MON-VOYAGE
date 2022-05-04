package MonVoyage.bookings;

import MonVoyage.hotels.Hotel;
import MonVoyage.users.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface BookingsRepository extends CrudRepository<Booking, Integer> {
    List<Booking> findByClientIdOrderByStartDate(int clientId);
    List<Booking> findBookingsByHotelId(int hotelId);
    List<Booking> findBookingsByHotelIdAndStartDateBeforeOrEndDateAfter(int hotelId, Date startDate, Date endDate);
}
// TODO
