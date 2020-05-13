/*
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).
Input: array, target
Output: indexes
Example: [1, 2, 3] 4 === (0, 2)

Proccess: Iterate through arr and use target to subtract from curr index, to get number to search for
if number is found, return the index of curr number and the searched number index


*/ 

const twoSum = (arr, target) => {
    let res = []
    for(let i=0; i < arr.length; i++){
        let diff = target - arr[i]
        if(arr.includes(diff) && arr.indexOf(diff) !== i){
            res.push(i, arr.indexOf(diff))
            return res
        }
    }
    return false
}
console.log(twoSum([1,2,4],5))