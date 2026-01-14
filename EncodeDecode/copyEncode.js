class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

  
    encode(strs) {
        let resultString="";
        for(let s of strs){
            resultString+=s.length+"#"+s;
        }
         return resultString; 
    }

     /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
    // 🔹 handle empty input
        if (str === "") return [];
        console.log(str)
    const resultArr=[];
          let i=0;
       
      while (i < str?.length) {
      let length = 0;
      while (str[i] !== "#") {
        length = length * 10 + Number(str[i]);
        console.log(length)
        i++;
      }
      i++; // skip '#'
      const word = str.slice(i, i + length);
      console.log(word)
      resultArr.push(word);

      i += length;
    }
     return resultArr;
  }
}
 const obj1= new Solution();
    const encode1= obj1.encode(["hello","world"]);
    const decode= obj1.decode(encode1);
    console.log(decode)
   