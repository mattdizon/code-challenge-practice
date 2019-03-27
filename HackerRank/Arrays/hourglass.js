// Given a 6x6 array:
//
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
//
// We define an hourglass in A to be a subset of values with indices falling in this pattern in arr's graphical representation:
//
// a b c
//   d
// e f g
//
// There are 16 hourglasses in arr, and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum.
//
// Input: Each of the  lines of inputs  contains  space-separated integers.
// Output: Print the largest (maximum) hourglass sum found in arr.
//
// Example:
//     Input:
//         1 1 1 0 0 0
//         0 1 0 0 0 0
//         1 1 1 0 0 0
//         0 0 2 4 4 0
//         0 0 0 2 0 0
//         0 0 1 2 4 0
//     Output:
//         19 =>
//         2 4 4
//           2
//         1 2 4
//
//     Hourglasses:
//     1 1 1  1 1 0  1 0 0  0 0 0
//       1      0      0      0
//     1 1 1  1 1 0  1 0 0  0 0 0
//
//     0 1 0  1 0 0  0 0 0  0 0 0
//       1      1      0      0
//     0 0 2  0 2 4  2 4 4  4 4 0
//
//     1 1 1  1 1 0  1 0 0  0 0 0
//       0      2      4      4
//     0 0 0  0 0 2  0 2 0  2 0 0
//
//     0 0 2  0 2 4  2 4 4  4 4 0
//       0      0      2      0
//     0 0 1  0 1 2  1 2 4  2 4 0
//

// declare a variable to take in max value,
// create a loop to iterate through 2d array
// iterate until you reach third to last element in the array (column)
// compare with max and make new max if value compared > max
// after row is finished increment row and keep comparing until row < number of rows - 3


function hourglassSum(arr) {
    let max = -63
    for(let i = 0; i <4; i++){
        for(let j = 0; j <4; j++){
            let t = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            if(t > max){
                max = t
            }
        }

    }
    return(max)
}
    hourglassSum([[1,1,1,0,0,0],[0,1,0,0,0,0],[1,1,1,0,0,0],[0,0,2,4,4,0],[0,0,0,2,0,0],[0,0,1,2,4,0]])
