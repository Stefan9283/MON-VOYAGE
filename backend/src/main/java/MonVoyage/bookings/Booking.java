package MonVoyage.bookings;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity
public class Booking {
    @Id
    @GeneratedValue
    private int id;
    private int clientId;
    private int hotelId;
    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
    private Date startDate;
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
    private Date endDate;

    public Booking() {}

    @Override
    public String toString() {
        return "Booking{" +
                "id=" + id +
                ", clientId=" + clientId +
                ", hotelId=" + hotelId +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                '}';
    }
}
