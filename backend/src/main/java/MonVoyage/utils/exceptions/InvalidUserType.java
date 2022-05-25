package MonVoyage.utils.exceptions;

public class InvalidUserType extends Exception{
    public InvalidUserType() {
        super("Specified user type does not exist :(");
    }
}
