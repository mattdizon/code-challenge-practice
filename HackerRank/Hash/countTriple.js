// You are given an array and you need to find number of tripets of indices  such that the elements at those indices are in geometric progression for a given common ratio  and .


// input:
    // arr of numbers
    // the ratio to look for
// output: count of triplets

// steps
// read in array take the first element(n), compare it with the n+1 if n+1/n = r add it to the array, then check the n+2 element,if n+2/n+1 = r add it if not check the next

// function to get array of all triplet possibilities

function getTriplets(arr, r){
    let triple = []
    let i = 0
    while(i <= arr.length - 3){

        let j = i + 1
        if(arr[j]/arr[i] == r){
            let k = j + 1

            if(arr[k]/arr[j] == r){
                triple.push([arr[i],arr[j],arr[k]])
                i++
            }
            else{
                j+=1
            }

        }
        i++

    }
    return(triple)
}


console.log(getTriplets([2,4,8],2));
