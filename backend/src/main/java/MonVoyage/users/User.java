package MonVoyage.users;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@Setter
@Entity
public class User {
    @Id
    private int id;
    private String username;
    private String email;
    private String passhash;
    private String type;

    public User() {}
}
