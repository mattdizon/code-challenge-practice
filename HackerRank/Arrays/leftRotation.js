// A left rotation operation on an array shifts each of the array's elements 1  unit to the left. For example, if 2 left rotations are performed on array 1,2,3,4,5 , then the array would become 3,4,5,1,2.
//
// Given an array a of n integers and a number,d , perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.
//
// Input:
//     5 4 =>
//     1 2 3 4 5
// Output:
//     5 1 2 3 4

function rotLeft(a, d) {
    let truncated = a.splice(0, d)
    for (let i = 0; i <= truncated.length - 1; i++) {

        a.push(truncated[i])


    }


}

rotLeft([1,2,3,4,5],4)
