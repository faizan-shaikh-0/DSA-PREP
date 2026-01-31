var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  let freq1 = new Array(26).fill(0);
  let freq2 = new Array(26).fill(0);
  for (let ch of s1) {
    freq1[ch.charCodeAt(0) - 97]++;
  }

  let left = 0;

  for (let right = 0; right < s2.length; right++) {
    freq2[s2[right].charCodeAt(0) - 97]++;
    
    if (right - left + 1 > s1.length) {
      freq2[s2[left].charCodeAt(0) - 97]--;
      left++;
    }
    console.log("freq1", freq1);
    console.log("freq2", freq2);

    if (freq1.join() === freq2.join()) {
      return true;
    }
  }

  return false;

  // Step 1: If s1 is longer than s2, return false
  // Step 2: Create frequency map for s1
  // Step 3: Create a sliding window of size s1.length in s2
  // Step 4: Add right character to window, remove left character when window exceeds size
  // Step 5: If window frequency matches s1 frequency, return true
  // Step 6: Slide window till end, else return false
};

const result = checkInclusion("ab", "eidbaooo");

console.log(result);
