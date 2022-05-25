package MonVoyage.cleaningReview;

import MonVoyage.hotels.Hotel;
import MonVoyage.room.Room;
import MonVoyage.users.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter
public class CleaningReport {
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int id;
    @ManyToOne(fetch = FetchType.EAGER)
    private User cleaningMan;
    @ManyToOne(fetch = FetchType.EAGER)
    private Hotel hotel;
    @ManyToOne(fetch = FetchType.EAGER)
    private Room room;
    private int absentObjects;
    private String damagesReport;
}
