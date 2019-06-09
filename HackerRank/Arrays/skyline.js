// you would like to paint the skyline using continuos horizontal brushstrokes. Every horizontal stroke is one unit high and arbitrarily wide
// The goal is to calculate the number of min horiz strokes needed

//Input: [1,3,2,1,2,1,5,3,3,4,2]
//Output: 9

function solution(A){
    let result = 0;
    for (let i=1; i<A.length; i++){
      result += Math.max(0, A[i-1] - A[i]);
    }
  
    return result + A[A.length-1];
  }
  

