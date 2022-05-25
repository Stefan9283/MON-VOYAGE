package MonVoyage.reviews;

import MonVoyage.users.User;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity
public class Review {
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int id;
    @ManyToOne(fetch = FetchType.EAGER)
    private User client;
    private int nrOfStars;
    private String mail;
    private int hotelId;
    private String reviewName;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private Date date;
    private String review;
}

