// Function Description
// Complete the function countSwaps in the editor below. It should print the three lines required, then return.
//
// countSwaps has the following parameter(s):
//     a: an array of integers .
//
// Output: print the following
//     Array is sorted in 3 swaps.
//     First Element: 1
//     Last Element: 6

//BUBBLE SORT:
//for (int i = 0; i < n; i++) {
//     for (int j = 0; j < n - 1; j++) {
//         // Swap adjacent elements if they are in decreasing order
//         if (a[j] > a[j + 1]) {
//             swap(a[j], a[j + 1]);
//         }
//     }
//
// }

//count number of swaps
//output swaps, first elem, last elem
function countSwaps(a) {
    let swaps = 0
    let x = a.length -1
    for(i = 0; i < a.length; i++){
        for(j = 0; j < a.length; j++){
            if(a[j]>a[j+1]){
                temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp
                swaps +=1
            }
        }
    }
    console.log(`Array is sorted in ${swaps} swaps.`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[x]}`)

}
countSwaps([3,2,1])
