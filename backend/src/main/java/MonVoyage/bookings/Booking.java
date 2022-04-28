package MonVoyage.bookings;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity
public class Booking {
    @Id
    private int id;
    private int clientId;
    private int hotelId;
    private Date startDate;
    private Date endDate;

    public Booking() {}
}
