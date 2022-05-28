package MonVoyage.timetable;

import org.hibernate.usertype.UserType;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface ShiftsRepository  extends CrudRepository<Shift, Integer> {
    @Query("from Shift where hotel_id=:hotelId and (" +
            "(start_date <= :startDate and :startDate <= :end_date) or " +
            "(start_date <= :endDate and :endDate <= :end_date) or " +
            "(:startDate <= start_date and end_date <= :endDate)" +
            ")")
    List<Shift> findShiftBetweenDates(
            @Param("hotelId")   int hotelId,
            @Param("startDate") Date startDate,
            @Param("endDate")   Date endDate
    );

    @Query("from Shift where " +
            "hotel.id=:hotelId and user.type=:userType " +
            "and (" +
            "(start_date <= :startDate and :startDate <= end_date) or " +
            "(start_date <= :endDate and :endDate <= end_date) or " +
            "(:startDate <= start_date and end_date <= :endDate)" +
            ")" +
            "")
    List<Shift> findShiftBetweenDatesWithSpecificRole(
        @Param("hotelId")   int hotelId,
        @Param("startDate") Date startDate,
        @Param("endDate")   Date endDate,
        @Param("userType") String userType
    );

}
