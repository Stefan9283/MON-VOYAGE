package MonVoyage.hotels;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ForeignKey;
import javax.persistence.JoinColumn;

@Getter
@Setter
@Entity
public class Hotel {
    @Id
    private int id;
    private String name;
    private String address;
    private String country;
    @JoinColumn(foreignKey = @ForeignKey(name = "manager"))
    private int manager;

    public Hotel() {}
}
