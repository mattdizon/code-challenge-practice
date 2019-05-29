/*
Given an array of integers, sort them first by frequency of occurenc, then by value

Example:
    Input: [4,5,6,4,3]
    Output: [3,5,6,4]
*/
function sortedArr(arr){
    let frequency = {}
    for(let i = 0; i < arr.length; i++){
        let element = arr[i]
        if(frequency[element] !== undefined){
            frequency[element] += 1
        }
        else{
            frequency[element] = 1
        }
    }
    var uniques = [];
    for(value in frequency) {
        uniques.push(value);
    }
    function compareFrequency(a, b) {
       return frequency[a] - frequency[b];
   }
   console.log(uniques.sort(compareFrequency));
}
sortedArr([4,5,6,4,3,1,1,1,2,8,2])
