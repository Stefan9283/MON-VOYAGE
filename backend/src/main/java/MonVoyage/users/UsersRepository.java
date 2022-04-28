package MonVoyage.users;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends CrudRepository<User, Integer> {
    boolean existsByEmailAndPasshash(String email, String password_hash);
    User findByEmail(String email);
    void deleteById(int id);
    User findById(int id);
}
// TODO
