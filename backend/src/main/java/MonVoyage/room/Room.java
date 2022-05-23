package MonVoyage.room;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Room {
    @Id
    private int id;
    private int number;
    private String type;
    private int hotelId;
    boolean state;
    boolean airCondtioning;
    boolean tv;
    boolean attractionView;
    boolean matrimonial;
    boolean smokerRoom;
    boolean hairDresser;

    public Room() {}
}
