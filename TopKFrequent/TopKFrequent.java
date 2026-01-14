package TopKFrequent;

import java.util.HashMap;
import java.util.Map;

public class TopKFrequent {
        public int[] topKFrequent(int[] nums, int k) {
            //step one HAshMap   1 key 1 and value 1
            // step 2  check value in hashmap exist if yes than increament by 1 
            // step 3 if not exist than  add key and value 
            // step 4  check in hashmap compare value with other and make array of it accroding to k  like 2 
             //[0,1]
             Map<Integer, Integer> map = new HashMap<>();

           for (int n : nums) {
    if (map.containsKey(n)) {
        map.put(n, map.get(n) + 1);
    } else {
        map.put(n, 1);
    }
}
 System.out.println("map values"+map);
 int maxValue = Integer.MIN_VALUE;
int maxKey = -1;
for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
    int value = entry.getValue();

    if (value > maxValue) {
        maxValue = value;
        maxKey = entry.getKey();
    }
}
System.out.println("max key"+ maxKey+ "max Value"+ maxValue);

        
            int arr[]={1};
            return arr;

        }

         public static void main(String[] args) {
        TopKFrequent g1 = new TopKFrequent();
         int arr[]={1,2,1,2,1,2,3,1,1,};
        int [] value =g1.topKFrequent(arr,2);
        System.out.println(value);
    }
}




// protected class TopKFrequentElements {

//   public int[] topKFrequent(int[] nums, int k) {

//     List<Integer>[] bucket = new List[nums.length + 1];
//     Map<Integer, Integer> frequencyMap = new HashMap<>();

//     for (int n : nums) {
//       frequencyMap.put(n, frequencyMap.getOrDefault(n, 0) + 1);
//     }

//     for (int key : frequencyMap.keySet()) {
//       int frequency = frequencyMap.get(key);
//       if (bucket[frequency] == null) {
//         bucket[frequency] = new ArrayList<>();
//       }
//       bucket[frequency].add(key);
//     }

//     List<Integer> topK = new ArrayList<>();
//     for (int pos = bucket.length - 1;pos >= 0 && topK.size() < k; pos--) {
//       if (bucket[pos] != null) {
//         topK.addAll(bucket[pos]);
//       }
//     }

//     return topK.stream().mapToInt(i -> i).toArray();

//   }

// }