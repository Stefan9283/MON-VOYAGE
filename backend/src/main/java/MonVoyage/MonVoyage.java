package MonVoyage;

import MonVoyage.security.ERole;
import MonVoyage.security.Role;
import MonVoyage.security.RolesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class MonVoyage {
    public static void main(String[] args) {
        SpringApplication.run(MonVoyage.class, args);
    }
}
