package MonVoyage.reviews;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Getter
@Setter
@Entity
public class Review {
    @Id
    @GeneratedValue
    private int id;
    private int clientId;
    private int nrOfStars;
    private String mail;
    private int hotelId;
    private String reviewNamel;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private Date date;
    private String review;
}

