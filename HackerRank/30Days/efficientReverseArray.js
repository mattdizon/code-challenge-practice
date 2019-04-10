// Print all N integers in A in reverse order as a single line of space-separated integers.

function reverseArray(a) {
    let half = a.length / 2
    let last = a.length - 1

    for(let i = 0; i < half; i++){
        let temp = a[i]
        a[i] = a[last]
        a[last] = temp
        last--
    }
}
reverseArray([1,2,3,4,5])
