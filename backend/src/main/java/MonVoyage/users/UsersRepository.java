package MonVoyage.users;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends CrudRepository<User, Integer> {
    boolean existsByEmailAndPass_hash(String email, String password_hash);
    User findByEmail(String email);
    void deleteById(int id);
}
// TODO
