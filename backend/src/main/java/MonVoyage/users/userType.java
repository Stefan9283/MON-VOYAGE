package MonVoyage.users;

import MonVoyage.utils.exceptions.InvalidUserType;
import java.lang.IllegalArgumentException;

import java.util.Arrays;
import java.util.List;

public enum userType {
    OMDESERVICIU,
    RECEPTIONER,
    GESTIONAR,
    CONTABIL,
    MANAGER,
    USER;

    public static List<userType> getTypes() {
        return Arrays.asList(OMDESERVICIU, RECEPTIONER, GESTIONAR, CONTABIL, MANAGER, USER);
    }

    public static userType getType(String name) throws InvalidUserType {
        try {
            return valueOf(name);
        } catch (IllegalArgumentException e) {
            throw new InvalidUserType();
        }
    }

    @Override
    public String toString() {
        return super.toString();
    }
}