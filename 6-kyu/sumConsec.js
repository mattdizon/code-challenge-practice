/*
You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

Input: [1,4,4,4,0,4,3,3,1] 
Output: [1,12,0,4,6,1]
Process: iterate through array if next = curr inc else push

see 1, hold the value
iterate and see 4
    4 != 1 so we push 1 and hold 4
iterate and see 4 
    4 == 4 so we sum
iterate and see 4 
    4 == 4 so we sum
iterate and see 4 
    4 == 4 so we sum
iterate and see 0
    0 != 4 so push

*/

const sumConsec = (arr) => {
    let res = []
    let sum = 0
    let curr = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(curr === arr[i]){
            sum += arr[i]
        }
        else{
            res.push(sum)
            sum = 0
            curr
        }
    }
}
console.log(sumConsec([1,4,4,4,0,4,3,3,1]))
