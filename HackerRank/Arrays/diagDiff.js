/*
Given a square matrix,
calculate the absolute difference between the sums of its diagonals.
*/
function diag(arr){
    let left = 0
    let right = 0
    let i = 0
    let j = arr.length - 1

    while(i !== arr.length){
        left += arr[i][i]
        right += arr[i][j]
        j--
        i++
    }

    return Math.abs(left-right)
}
console.log(diag([[-1,1,-7,-8],[-10,-8,-5,-2],[0,9,7,-1],[4,4,-2,1]]));
