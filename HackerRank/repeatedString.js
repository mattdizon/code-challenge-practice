// Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.

// Given an integer,n , find and print the number of letter a's in the first  letters of Lilah's infinite string.
//
// For example, if the string s='abcac' and n=10, the substring we consider is 'aabcacabcac', the first  characters of her infinite string. There are 4 occurrences of a in the substring.
//
// Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.
//
// repeatedString has the following parameter(s):
//
// s: a string to repeat
// n: the number of characters to consider
//
// Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.
//
// repeatedString has the following parameter(s):
//
// s: a string to repeat
// n: the number of characters to consider
//
// Input Format
//
// The first line contains a single string,s .
// The second line contains an integer,n .
//
// Output Format
//
// Print a single integer denoting the number of letter a's in the first  letters of the infinite string created by repeating infinitely many times.

//step 1: find the number of time the string repeats fully
//step 2: find the at which place it will end via modulo
//step 4 multiply the number of times 'a' appears in the original string by the number of times it repeats fully
//step 5 create a new string that is truncated where it ends
//step 6 find the number of 'a's in the truncated string and add it to step 4
function repeatedString(s, n) {
    let repeatsFully = parseInt(( n / s.length),10)
    let truncatedStringNum = n % s.length
    let filterA = s.split("").filter(letter => letter === 'a');
    let aCount = filterA.length * repeatsFully
    let truncatedString = s.slice(0,truncatedStringNum)
    if(truncatedStringNum !== 0){
        aCount += truncatedString.split("").filter(letter => letter === 'a').length
    }

    return(aCount)

}
repeatedString('aba',10)
