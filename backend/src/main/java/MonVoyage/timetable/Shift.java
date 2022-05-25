package MonVoyage.timetable;


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
public class Shift {
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int id;
    @ManyToOne(fetch = FetchType.EAGER)
    private User user;
    @ManyToOne(fetch = FetchType.EAGER)
    private Hotel hotel;

//    https://help.gooddata.com/cloudconnect/manual/date-and-time-format.html
//    "EEE, MMM d, "yy"	Wed, Jul 4, '01
//    "h:mm a"	            12:08 PM
    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="dd-MM-yyyy h:mm a")
    private Date startDate;
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy h:mm a")
    private Date endDate;

    public Shift() {}
    public Shift(Date startDate, Date endDate, User user, Hotel hotel) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.hotel = hotel;
        this.user = user;
    }
}
