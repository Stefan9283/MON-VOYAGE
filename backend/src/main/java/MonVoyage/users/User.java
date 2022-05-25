package MonVoyage.users;

import MonVoyage.hotels.Hotel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Arrays;
import java.util.List;



@Getter
@Setter
@Entity
public class User {
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int id;
    private String username;
    private String email;
    private String passhash;
    private String phone;
    @ManyToOne(fetch = FetchType.EAGER)
    private Hotel hotel;
    private String salary;
    private String type;

    public User() {}
}
