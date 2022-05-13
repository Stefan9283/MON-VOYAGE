package MonVoyage.buylist;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class BuyList {
    @Id
    @GeneratedValue
    private int id;
    private int hotelId;
    private int roomNumber;
    private int sheetsQuantity;
    private int tvQuantity;
    private int miniBarQuantity;
    private int towelsQuantity;
    private int glassesQuantity;
    private int bathroomSuppliesQuantity;
}
