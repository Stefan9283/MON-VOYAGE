package MonVoyage.cleaningReview;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Setter
@Getter
public class CleaningReport {
    @Id
    @GeneratedValue
    private int id;
    private int cleaningManId;
    private int hotelId;
    private int roomId;
    private int roomState;
    private String damagesReport;
}
