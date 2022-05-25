package MonVoyage.hotels;

import MonVoyage.users.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Hotel {
    @Id
    private int id;
    private String name;
    private String address;
    private String city;
    private int nrOfMatrimonialRooms;
    private int nrOfTwinRooms;
    private int nrOfTripleRooms;
    private String country;
    @ManyToOne(fetch = FetchType.EAGER)
    private User manager;

    public Hotel() {}
}
