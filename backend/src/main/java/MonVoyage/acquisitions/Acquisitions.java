package MonVoyage.acquisitions;

import MonVoyage.hotels.Hotel;
import MonVoyage.room.Room;
import MonVoyage.users.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Acquisitions {
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int id;
    @ManyToOne(fetch = FetchType.EAGER)
    private Hotel hotel;
    @ManyToOne(fetch = FetchType.EAGER)
    private Room room;
    @ManyToOne(fetch = FetchType.EAGER)
    private User user;
    private String name;
    private int sheetsQuantity;
    private int tvQuantity;
    private int miniBarQuantity;
    private int towelsQuantity;
    private int glassesQuantity;
    private int bathroomSuppliesQuantity;
}
