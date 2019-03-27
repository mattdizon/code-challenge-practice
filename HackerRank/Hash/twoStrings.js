// Given two strings, determine if they share a common substring. A substring may be as small as one character.
//
// For example, the words "a", "and", "art" share the common substring a. The words "be" and "cat" do not share a substring.
//
// Complete the function twoStrings in the editor below. It should return a string, either YES or NO based on whether the strings share a common substring.
//
// twoStrings has the following parameter(s):
//
//     s1, s2: two strings to analyze .

// create hash to store elements of the larger word
// compare each letter of the smaller word witht the inner word
function twoStrings(s1, s2) {
    let possible = false
    let letterHash = {}
    let smallerWord = ""
    if(s1.length >= s2.length){
        smallerWord = s2
        for(let i = 0; i < s1.length; i++){
            if(s1[i] in letterHash){
                letterHash[s1[i]] += 1
            }
            else{
                letterHash[s1[i]] = 1
            }
        }
    }
    else{
        smallerWord = s1
        for(let i = 0; i < s1.length; i++){
            if(s2[i] in letterHash){
                letterHash[s2[i]] += 1
            }
            else{
                letterHash[s2[i]] = 1
            }
        }
    }
    let i = 0
    while( i < smallerWord.length){
        if(smallerWord[i] in letterHash){
            possible = true
        }
        i++
    }
    if (possible){
        return "YES"
    }else{
        return "NO"
    }
}
twoStrings("Hellllo", "a1a")
