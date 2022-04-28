package MonVoyage.hotels.room;

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
    private int hotel_id;
    boolean state;

    public Room() {}
}
