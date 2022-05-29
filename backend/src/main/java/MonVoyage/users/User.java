package MonVoyage.users;

import MonVoyage.hotels.Hotel;
import MonVoyage.security.Role;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Getter
@Setter
@Entity
@Table(name = "users",
    uniqueConstraints = {
        @UniqueConstraint(columnNames = "username"),
        @UniqueConstraint(columnNames = "email")
})
public class User {
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int id;
    private String username;
    private String email;
    private String password;
    private String phone;
    @ManyToOne(fetch = FetchType.EAGER)
    private Hotel hotel;
    private String salary;

    @ManyToMany(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    public User() {}

    public User(String username, String email, String encode) {
        this.username = username;
        this.email = email;
        this.password = encode;
    }

    public void addRole(Role role) {
        roles.add(role);
    }
    public void removeRole(Role role) {
        roles.remove(role);
    }
}
