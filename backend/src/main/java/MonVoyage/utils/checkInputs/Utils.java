package MonVoyage.utils.checkInputs;


import javafx.util.Pair;

import java.util.*;

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

    // check if the string phoneNo has
    // a format similar to +40123456789
    static boolean isPhoneNo(String phoneNo) {
        phoneNo = phoneNo.replace(" ", "")
                         .replace("-", "")
                         .replace(".", "")
                         .replace("(", "")
                         .replace(")", "");

        if (phoneNo.length() != 12) return false;
        if (phoneNo.charAt(0) != '+') return false;
        for (Character c : phoneNo.substring(1).toCharArray())
            if (!Character.isDigit(c))
                return false;
        return true;
    }

    //
    static Pair<Boolean, HashMap<String, Boolean>> isValidPassword(String password) {
        HashMap<String, Boolean> has = new HashMap<>();

        has.put("hasLength", false);
        has.put("hasLower", false);
        has.put("hasUpper", false);
        has.put("hasDigit", false);
        has.put("hasSpecial", false);

        if (password.length() >= 8)
            has.put("hasLength", true);

        List<Character> specials = Arrays.asList('~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=',
                                                '{', '}', '[', ']', '|', '\\', '/', ':', ';', '\'', '\'', '<', '>', ',', '.', '?');

        for (Character c : password.substring(1).toCharArray()) {
            if (Character.isDigit(c)) {
                has.replace("hasDigit", true);
                continue;
            }
            if (specials.contains(c)) {
                has.replace("hasSpecial", true);
                continue;
            }
            if (Character.isUpperCase(c)) {
                has.replace("hasUpper", true);
                continue;
            }
            if (Character.isLowerCase(c)) {
                has.replace("hasLower", true);
            }
        }

        return new Pair<>(!has.values().remove(false), has);
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
//        System.out.println(Utils.isValidPassword("whyarewestillhere"));
//        System.out.println(Utils.isValidPassword("whyAreWeStillHere"));
//        System.out.println(Utils.isValidPassword("whyAreWeStillHere?"));
//        System.out.println(Utils.isValidPassword("why4reWeStillHere?"));
//        System.out.println(Utils.isValidPassword("why4reWeStillHere?"));

        // phone_no
        System.out.println(Utils.isPhoneNo("+40 123 456 789"));
    }
}
