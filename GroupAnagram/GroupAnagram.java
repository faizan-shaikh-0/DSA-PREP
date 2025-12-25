package GroupAnagram;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class GroupAnagram {

    List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();

        for (String s : strs) {
            int[] count = new int[26];

            for (char c : s.toCharArray()) {
                count[c - 'a']++;
            }

            StringBuilder sb = new StringBuilder();
            for (int i : count) {
                sb.append('#').append(i);
            }

            String key = sb.toString();

            if(!map.containsKey(key)){
               map.put(key, new ArrayList<String>());
            }
            map.get(key).add(s);
            // create list if not present
            // map.putIfAbsent(key, new ArrayList<>());
            // map.get(key).add(s);
        }

        return new ArrayList<>(map.values());
    }

    public static void main(String[] args) {
        GroupAnagram g1 = new GroupAnagram();
        List<List<String>> value =
                g1.groupAnagrams(new String[]{"eat", "tea", "tan", "ate", "nat", "bat"});
        System.out.println(value);
    }
}
