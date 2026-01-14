var productExceptSelf = function(nums) {

  const result = new Array(nums.length);

  // 1️⃣ Left product pass
  let leftProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }

  // 2️⃣ Right product pass
  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  return result;
};

const result= productExceptSelf([1,2,3,4])
console.log(result,"result")