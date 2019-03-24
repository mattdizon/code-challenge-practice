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
