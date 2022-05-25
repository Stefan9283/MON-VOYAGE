package MonVoyage.acquisitions;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class Acquisitions {
    @Id
    @GeneratedValue
    private int id;
    private int hotelId;
    private int roomNumber;
    private String name;
    private String user;
    private int sheetsQuantity;
    private int tvQuantity;
    private int miniBarQuantity;
    private int towelsQuantity;
    private int glassesQuantity;
    private int bathroomSuppliesQuantity;
}
