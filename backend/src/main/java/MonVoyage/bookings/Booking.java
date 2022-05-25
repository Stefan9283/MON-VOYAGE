package MonVoyage.bookings;

import MonVoyage.hotels.Hotel;
import MonVoyage.users.User;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity
public class Booking {
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int id;
    @ManyToOne(fetch = FetchType.EAGER)
    private User client;
    @ManyToOne(fetch = FetchType.EAGER)
    private Hotel hotel;
    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
    private Date startDate;
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
    private Date endDate;

    public Booking() {}

    @Override
    public String toString() {
        return "Booking{" +
                "id=" + id +
                ", client=" + client +
                ", hotel=" + hotel +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                '}';
    }
}
