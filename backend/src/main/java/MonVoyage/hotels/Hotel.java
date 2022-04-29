package MonVoyage.hotels;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@Setter
@Entity
public class Hotel {
    @Id
    private int id;
    private String name;
    private String address;
    private String country;
    @Column(name = "manager_id")
    private int managerId;

    public Hotel() {}
}
