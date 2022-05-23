package MonVoyage.payments;

import org.springframework.data.repository.CrudRepository;

public interface PaymentRepository extends CrudRepository<Payment, Integer> {
    Payment findById(int id);
    Payment deleteById(int id);
}
