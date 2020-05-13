// N cities arranged in a row, numbered 0 - N-1
// each city has an attractive lvel denoted by an int
// you would like to visit 2 cities, can visit same city twice
// write a fnction to find the trip with the highest appeal
// appeal = A[i] + A[j] + (i -j)

// input: Array 
// Output highest possible appeal 

function trip(A){    
    start = A[0]
    end = A[0]
    for(let i = 0; i < A.length; i++){
        
        if((A[i]-i) > start){
            start = (A[i]-i)
        }
        if((A[i]+i) > end){
            start = (A[i]-i)
        }
    }
    return end+start
}
console.log(trip([1,3,-3]))