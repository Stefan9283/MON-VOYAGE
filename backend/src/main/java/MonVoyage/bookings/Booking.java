package MonVoyage.bookings;

import MonVoyage.hotels.Hotel;
import MonVoyage.users.User;
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
    @ManyToOne
    private User client;
//    @JoinColumn(foreignKey = @ForeignKey(name = "client"))
//    private int client;
    @ManyToOne
    private Hotel hotel;
//    @JoinColumn(foreignKey = @ForeignKey(name = "hotel"))
//    private int hotel;
    private Date start_date;
    private Date end_date;

    public Booking() {}
}
