package MonVoyage.reviews;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
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
        return reviewsRepository.findReviewsByHotelId(hotelId);
    }
}
