package MonVoyage.payments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payment")
public class PaymentController {
    @Autowired
    PaymentRepository paymentRepository;

    @PostMapping()
    public ResponseEntity<HttpStatus> addPayment(@RequestBody Payment payment) {
        try {
            paymentRepository.save(payment);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/modify/{id}/{field}")
    public String modifyFieldInPayment(@PathVariable("field") String field,
                                    @PathVariable("id") int id, @RequestBody String modifyWith) {

        Payment payment = paymentRepository.findById(id);
        if (field.equals("status"))
            payment.setStatus(modifyWith);
        else if (field.equals("name"))
            payment.setPaymentName(modifyWith);
        else
            return "Wrong field!";

        paymentRepository.save(payment);
        return "User updated!";
    }
}
