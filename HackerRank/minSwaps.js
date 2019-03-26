// You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.
//
// For example, given the array [7,1,3,2,4,5,6]  we perform the following steps:
//
// i   arr                     swap (indices)
// 0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
// 1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
// 2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
// 3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
// 4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
// 5   [1, 2, 3, 4, 5, 6, 7]
//
// It took 5 swaps to sort the array.
//
// Complete the function minimumSwaps in the editor below. It must return an integer representing the minimum number of swaps to sort the array.
//
// minimumSwaps has the following parameter(s):
//
// arr: an unordered array of integers
// loop through array
// if array element != index + 1
    // find the element and swap it with the current
    // increment our swap


function minimumSwaps(q){
    let swaps = 0
//function to find where the element is
    let index = (arr,idx) =>{
        let iterator=0
        while(arr[iterator]!==idx+1){
            iterator++
        }
    return iterator
    }
    // function to swap current element with the correct one
    let swap = (arr,x,y) =>{
        let temp=arr[x]
        arr[x]=arr[y]
        arr[y]=temp
    }
    //loop to call both functions and increment swap counter
    for(let i=0;i<q.length-1;i++){
        if(q[i]!==i+1){
            swap(q,index(q,i),i)
            swaps++
        }
    }
return (swaps)

}




minimumSwaps([1,3,5,2,4,6,7])
