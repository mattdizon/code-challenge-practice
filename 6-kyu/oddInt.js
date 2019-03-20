// Given an array, find the int that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.
//
function findOdd(A) {
    let numberHash = {}
    for(let i = 0; i < A.length; i++){
        if(A[i] in numberHash ){
            numberHash[A[i]] += 1
        }
        else{
            numberHash[A[i]] = 1
        }
    }
    let result = 0
    for(let e in numberHash) {           // for each key e in the hash (the key are the items of the array)
        if(numberHash[e] % 2)              // if the count of that item is an odd number
        result = e;           // then push the item into the result array (since they are keys are strings we have to cast them into numbers using unary +)
    }
    return (parseInt(result));

}
findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])
