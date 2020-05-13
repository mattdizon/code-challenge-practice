/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

    input: string with dash/camelcase
    output: string with letter after dash Capital
    process: read each index and if the index contains a dash we want to remove it and then convert the index after it into a Uppercase,
*/

const convert = (s) => {
    s = s.split('')
    for(i = 0; i < s.length; i++){
        if(s[i] === '-' || s[i] === '_'){
            s.splice(i,1)
            s[i] = s[i].toUpperCase()
        }
    }
    return s.join('')
}
