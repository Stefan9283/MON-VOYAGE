package MonVoyage.reviews;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/review")
public class ReviewController {
    @Autowired
    ReviewsRepository reviewsRepository;

    @GetMapping("/showReviewsFrom/{hotelId}")
    public List<Review> getAllReviews(@PathVariable("hotelId") int hotelId) {
        List<Review> reviews = reviewsRepository.findReviewsByHotelId(hotelId);

        return reviews;
    }
}
