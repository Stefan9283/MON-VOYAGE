package MonVoyage.users;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Arrays;
import java.util.List;



@Getter
@Setter
@Entity
public class User {
    @Id
    @GeneratedValue
    private int id;
    private String username;
    private String email;
    private String passhash;
    private String phone;
    private String hotelId;
    private String salary;
    private String workingHours;
    private String type;

    public User() {}
}
