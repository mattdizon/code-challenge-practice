// Complete the makeAnagram function in the editor below. It must return an integer representing the minimum total characters that must be deleted to make the strings anagrams.
//
// makeAnagram has the following parameter(s):
//     a: a string
//     b: a string
// Output: Print a single integer denoting the number of characters you must delete to make the two strings anagrams of each other.

function makeAnagram(a, b) {
    let hashA = {}
    let hashB = {}
    let arrA = a.split('')
    let arrb = b.split('')
    let deleteCount = 0
    for(let i = 0; i < a.length; i++){
        if(!(a[i] in hashA)){
            hashA[a[i]] = 1
        }
        else{
            hashA[a[i]] += 1
        }
    }
    for(let i = 0; i < b.length; i++){
        if(!(b[i] in hashB)){
            hashB[b[i]] = 1
        }
        else{
            hashB[b[i]] += 1
        }
    }
    // need to compare the larger hash to smaller
    // if letter is not a key in the smaller increment count
    // if it is find the value and delete the difference
    // do the same for the smaller one if it is not a key increment deletecount
        for(let letter in hashA){
        if(letter in hashB){
            if(hashA[letter]>hashB[letter]){
                deleteCount += hashA[letter] - hashB[letter]
            }
        }
        else{
            deleteCount += hashA[letter]
        }
        }


    for(let letter in hashB){
    if(letter in hashA){
        if(hashA[letter] < hashB[letter]){
            deleteCount += hashB[letter] - hashA[letter]
        }
    }
    else{
        deleteCount += hashB[letter]
    }
    }

    return(deleteCount)
}
