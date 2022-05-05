package MonVoyage.bookings;

import MonVoyage.hotels.Hotel;
import MonVoyage.users.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface BookingsRepository extends CrudRepository<Booking, Integer> {
    List<Booking> findByClientIdOrderByStartDate(int clientId);
    List<Booking> findBookingsByHotelId(int hotelId);
    List<Booking> findBookingsByHotelIdAndStartDateAfterAndEndDateBefore(int hotelId, Date startDate, Date endDate);
    List<Booking> findBookingsByHotelIdAndStartDateIsLessThanAndEndDateGreaterThan(int hotelId, Date startDate, Date endDate);
    List<Booking> findBookingsByHotelIdAndStartDateIsGreaterThanAndEndDateIsLessThan(int hotelId, Date endDate, Date startDate);
    
    @Query("from Booking where hotel_id=:hotelId and ((end_date < :startDate) or (start_date > :endDate))")
    List<Booking> findBookingsByHotelIdWithNoIntersections(
            @Param("hotelId")   int hotelId,
            @Param("startDate") Date startDate,
            @Param("endDate")   Date endDate
    );

    @Query("from Booking where hotel_id=:hotelId and (" +
            "(:startDate <= start_date and start_date <= :endDate) or " +
            "(:startDate <= end_date and end_date <= :endDate))")
    List<Booking> findBookingsByHotelIdWithIntersections(
            @Param("hotelId")   int hotelId,
            @Param("startDate") Date startDate,
            @Param("endDate")   Date endDate
    );

}
// TODO
