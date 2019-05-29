/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
*/

function minMaxSum(arr){
    let min = 0
    let max = 0
    let i = 0
    let len = arr.length - 1
    arr.sort()
    while(i < arr.length - 1){
        min += arr[i]
        max += arr[len]
        len--
        i++
    }
    return (min, max)
}
minMaxSum([1,2,3,4,5])
