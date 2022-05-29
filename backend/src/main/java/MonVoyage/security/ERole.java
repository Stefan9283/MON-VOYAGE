package MonVoyage.security;

import MonVoyage.utils.exceptions.InvalidUserType;

import java.util.Arrays;
import java.util.List;

public enum ERole {
    ADMIN,
    JANITOR,        // OMDESERVICIU,
    RECEPTIONIST,   // RECEPTIONER,
    ACCOUNTANT,     // CONTABIL,
    MANAGER,        // GESTIONAR
    USER;


    public static List<ERole> getTypes() {
        return Arrays.asList(ADMIN, JANITOR, RECEPTIONIST, ACCOUNTANT, MANAGER, USER);
    }

    public static ERole getType(String name) throws InvalidUserType {
        try {
            return valueOf(name);
        } catch (IllegalArgumentException e) {
            throw new InvalidUserType();
        }
    }

    public static boolean exists(String name) {
        for (ERole role : getTypes())
            if (role.toString().equals(name))
                return true;
        return false;
    }


    @Override
    public String toString() {
        return super.toString();
    }
}