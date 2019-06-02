// set max to smallest number possible so it will change on first pass and on any pass after
// similarialy to previous attemp, we will pull first 2 elem
// pull to elem and reduce by mult
// figure out count of nums we use
// increment  if we have one pos num

const maxProd = (nums,numFactors) =>{
  nums.sort((a, b) => a - b)
  let max = Number.NEGATIVE_INFINITY
  for (let i = 0; i <= numFactors; i+=2){
    let temp = (nums.slice(0, i)).reduce((acc, curr) => acc * curr, 1);
    let count = numFactors - i
    if (count > 0) {
      temp *= (nums.slice(nums.length - count)).reduce((acc, curr) => acc * curr, 1);
    }
  max = max<temp?temp:max
  }
  return max
}
