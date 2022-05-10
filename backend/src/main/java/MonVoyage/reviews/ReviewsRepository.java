package MonVoyage.reviews;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewsRepository extends CrudRepository<Review, Integer> {
    List<Review> findReviewsByHotelId(int hotelId);
}
