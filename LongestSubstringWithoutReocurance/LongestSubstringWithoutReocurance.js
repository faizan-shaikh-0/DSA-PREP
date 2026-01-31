var lengthOfLongestSubstring = function(s) {
let start=0,end=0;
const map = new Map();
    let maxLen = 0;

for(end;end<s.length;end++){
    if(map.has(s[end])){
        start= Math.max(start,map.get(s[end])+1)
    }
        map.set(s[end],end)
  maxLen = Math.max(maxLen, end - start + 1);
    console.log(maxLen)
}

console.log(map)
return maxLen;
};


const result= lengthOfLongestSubstring("pwwkew")

console.log(result)