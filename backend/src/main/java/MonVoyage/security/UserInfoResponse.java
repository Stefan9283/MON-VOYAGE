package MonVoyage.security;

import java.util.ArrayList;
import java.util.List;

public class UserInfoResponse {
    Long id;
    String username;
    String email;
    List<String> roles;
    public UserInfoResponse(Long id, String username, String email, List<String> roles) {
        this.id = Long.valueOf(id);
        this.username = username;
        this.email = email;
        this.roles = new ArrayList<>(roles);
    }

    @Override
    public String toString() {
        return "UserInfoResponse{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", roles=" + roles +
                '}';
    }
}
