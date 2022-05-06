package MonVoyage.utils;

public class Utils {
    // TODO 
    static boolean isEmail(String email) {
        int ats_count = (int) email.chars().filter(ch -> ch == '@').count();
        int dots_count = (int) email.chars().filter(ch -> ch == '.').count();

        if (dots_count != 1 || ats_count != 1)
            return false;

        int first_at = email.indexOf('@');
        int first_dot = email.indexOf('.');

        if (first_at == 0 || first_at == first_dot - 1 || first_dot == email.length() - 1)
            return false;

        return true;
    }

    static boolean isPhoneNo(String phoneNo) {
        return false; // TODO
    }

    static boolean isValidPassword(String password) {
        return false; // TODO
    }

    public static void main(String[] args) {
        // email
//        System.out.println(Utils.isEmail("asaga@fa@.com"));
//        System.out.println(Utils.isEmail("asaga@fa."));
//        System.out.println(Utils.isEmail("@fa.com"));
//        System.out.println(Utils.isEmail("asaga@.caf"));
//        System.out.println(Utils.isEmail("asagacaf"));
//        System.out.println(Utils.isEmail("sfasffa.caf"));
//        System.out.println(Utils.isEmail("asaga@caf"));
//        System.out.println(Utils.isEmail("asaga@fa.com"));
        // password
        
        // phone_no
    }
}
