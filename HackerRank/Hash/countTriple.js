// You are given an array and you need to find number of tripets of indices  such that the elements at those indices are in geometric progression for a given common ratio  and .


// input:
    // arr of numbers
    // the ratio to look for
// output: count of triplets

// steps
// read in array take the first element(n), compare it with the n+1 if n+1/n = r add it to the array, then check the n+2 element,if n+2/n+1 = r add it if not check the next

// function to get array of all triplet possibilities

function getTriplets(arr, r){
    let triplets = 0;
   const count = [];
   const pairs = [];
   for (let n = 0; n < arr.length; n++) {
       const i = arr[n]
       const ir = i/r
       if (count[i] === undefined) {count[i] = 0; pairs[i] = 0}
       if (pairs[ir]) {
           triplets += pairs[ir]
       }
       if (count[ir]) {
           pairs[i] += count[ir]
       }
       count[i]++
   }
   return triplets;
}


console.log(getTriplets([2,4,8],2));
