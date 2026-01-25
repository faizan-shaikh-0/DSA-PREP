var twoSum = function(numbers, target) {

    let l=0, r=numbers.length-1
    while(l<r){
        if(numbers[l]+numbers[r]===target){
            return[l+1,r+1]
        }else if(numbers[l]+numbers[r]>target){
                r--
        }else{
                l++
        }
    }
};
    const result=twoSum([2,7,11,15],9)

    console.log(result)


    //in optimal left right  working after  that if sum is big left increament and 

   // bruteForce Approach

//     var twoSum = function(numbers, target) {

//     for(let i=0;i<numbers.length;i++){
//         for(let j=i+1;j<numbers.length;j++){
//             if(numbers[i]+numbers[j]===target){   
//                 return [i+1,j+1];
//             }
//         }
//     } 
// };