package MonVoyage.questions;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class Questions {
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int id;
    private String name;
    private String question;
}
