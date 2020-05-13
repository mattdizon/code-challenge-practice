// Write a function to return an n element in Fibonacci sequence
// Fibonacci sequence is where the curr elem is the sum of the previous 2 elem
const fib = (n) => {
    let fibArr = [0,1]
    for(let i = 2; i <= n+1; i++){
        fibArr.push(fibArr[i-2] + fibArr[i-1])
    }
    return fibArr[n]
}