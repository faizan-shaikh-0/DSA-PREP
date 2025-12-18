package ValidAnagram;
import java.util.HashMap;
import java.util.Map;



public class ValidAnagram {

   public boolean isValidAnagram(String s, String t) {
         if (s.length() != t.length()) {
            return false;
        }
    Map<Character, Integer> map = new HashMap<>();
    for (int i = 0; i < s.length(); i++) {
    char c = s.charAt(i);
    map.put(c, map.getOrDefault(c, 0) + 1);
}
   System.out.println(map);


      for (int i = 0; i < t.length(); i++) {
    char c = t.charAt(i);

    if (!map.containsKey(c)) {
        return false;
    }

    map.put(c, map.get(c) - 1);

    if (map.get(c) == 0) {
        map.remove(c);
    }
}
         
        return true;
   }

    public static void main(String[]args){

    ValidAnagram v1= new ValidAnagram();
    boolean value=v1.isValidAnagram("a", "ab");
    System.out.println(value);

   }


}
