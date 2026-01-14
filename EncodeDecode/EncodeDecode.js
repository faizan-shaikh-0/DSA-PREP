class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    //step1: first add one extra
    //length+delimitter+string
    //5#hello5#world0#
    //[hello,world]

    encode(strs) {
        // return strs.join();
        let resultString="";
        strs.forEach(element => {
            resultString+=element.length+"#"+element
        });
       return resultString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
    // 🔹 handle empty input
    if (str === "") return [];

    const resultArr = [];
    let i = 0;

    while (i < str.length) {
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