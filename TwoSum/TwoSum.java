package TwoSum;

import java.util.HashMap;
import java.util.Map;

public class TwoSum {

int[] isTwoSum (int[] nums, int target){
    Map<Integer,Integer> map =new HashMap<>();

        for(int i=0; i< nums.length;i++){
             int complement = target - nums[i];
    
              if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
             map.put(nums[i], i);
        
        }

     return new int[]{};
}

public static void main(String args[]){
    TwoSum t1= new TwoSum();
    int arr[]={2,7,11,15};
    t1.isTwoSum(arr,9);
}

}


//step 1  create hashmap
//step 2  target -nums[i] is exist in hashMap  if yes return index of both else insert value
//step 3 target -nums[i] 6-3 = 3 so check condtion traget - nums[i]!= nums[1]