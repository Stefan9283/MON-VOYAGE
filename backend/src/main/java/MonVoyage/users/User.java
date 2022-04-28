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

    /*
        OMDESERVICIU
        RECEPTIONER
        GESTIONAR
        CONTABIL
        MANAGER
        USER
     */
    private String type;

    public User() {}

    // TODO check the value of "modifyWith"
    public void setUsername(String modifyWith) {
        username = modifyWith;
    }
    public void setPasshash(String modifyWith) {
        passhash = modifyWith;
    }
    public void setEmail(String modifyWith) {
        email = modifyWith;
    }

}
