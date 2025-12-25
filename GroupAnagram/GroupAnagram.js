

function GroupAnagram (strs){
   // Step 1: Create a HashMap<String, List<String>>
//         Key   → sorted version of the string
//         Value → list of original anagram strings

// Step 2: For each string in the input array:
//   - Convert the string to a char array
//   - Sort the char array
//   - Convert it back to a string → this becomes the key
//   - If the key exists in the map, add the string to its list
//   - Otherwise, create a new list and put it in the map

// Step 3: Repeat until all strings are processed

// Step 4: Return all the values of the map as a List<List<String>>
// “All anagrams produce the same sorted character sequence, so we use it as a HashMap key.”


    console.log("Groupanagram",strs)
}


GroupAnagram(["eat","tea","tan","ate","nat","bat"]);