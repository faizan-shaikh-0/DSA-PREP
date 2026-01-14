var topKFrequent = function(nums, k) {

    //step1  make an  hash map  thier  key is value and frequency is  value
    // step 2 -> now i have to compare values in  map and store that into max element array
    // step 3 :=> once i fount largest one  than i remove that from map and  return that same process  as per length of k 
    
    const map = new Map();
    const frequentArray=[]
   
    nums.forEach(element => {


        if(map.has(element)){
            map.set(element,map.get(element)+1)
        }else{
            map.set(element,1)
        }
    });
 console.log(map,"map")

 for(let i=0;i<k;i++){
     let maxFreq = 0;
let maxElement = null;

 for (let [key, value] of map) {
  if (value > maxFreq) {
    maxFreq = value;
    maxElement = key;
  }
}
frequentArray.push(maxElement)
map.delete(maxElement);
 }
 return frequentArray;
};
//Map(3) { 1 => 3, 2 => 2, 3 => 1 } map
const topk=topKFrequent([1,1,1,2,2,3],2)
console.log(topk,"result")