var characterReplacement = function(s, k) {
    let left = 0;
    let maxFreq = 0;
    let maxWindow = 0;
    let map = new Map();

    for (let right = 0; right < s.length; right++) {
        map.set(s[right], (map.get(s[right]) || 0) + 1); // short cut and good way to write code  
        maxFreq = Math.max(maxFreq, map.get(s[right]));

        // shrink window if invalid
        while ((right - left + 1) - maxFreq > k) {
            map.set(s[left], map.get(s[left]) - 1); // to reduce it and remove form  window thats why 
            left++;
        }

        maxWindow = Math.max(maxWindow, right - left + 1);
    }

    return maxWindow;
};

const result = characterReplacement("AABABBA", 1);
console.log(result); // 4
