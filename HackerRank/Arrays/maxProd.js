const maxProd = (nums, numFactors) =>{
  nums.sort((a, b) => a - b)
  let max= 1
  let lastIdx = nums.length - 1
  // let lastTwo = nums[lastIdx] * nums[lastIdx - 1] * nums[lastIdx - 2]
  // // let firstTwo = nums[0] * nums[1] * nums[lastIdx]
  // let firstTwo;
  // for(let i = 0; i<=numFactors; i++)
  //   firstTwo *= nums[i]
  // if (firstTwo < lastTwo) {
  //   return lastTwo
  // }
  // else{
  //   return firstTwo
  // }
  for(let i=0;i<parseInt(numFactors/2);i++){
      if (nums[0] * nums[1] > nums[nums.length - 1] * nums[nums.length - 2]) {
        max = max * nums[0] * nums[1];
      nums.splice(0, 2);
    } else {
      max = max * nums[nums.length - 1] * nums[nums.length - 2]
      nums.splice(lastIdx-1, 2);
    }
  }



  if(numFactors%2 == 1){
    max = max*nums[nums.length-1];
  }

  return max;
}
console.log(maxProd([-20,-5,-3,-2,-1,40,90],4));
