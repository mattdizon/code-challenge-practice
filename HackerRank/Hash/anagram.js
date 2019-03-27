// Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.
//
// Complete the function sherlockAndAnagrams in the editor below. It must return an integer that represents the number of anagrammatic pairs of substrings in .
//
// sherlockAndAnagrams has the following parameter(s):
//     s: a string .
// iterate through string and get all possible combinations of sub strings
// iterate through this array of combinations and see if there is another element
function sherlockAndAnagrams(s) {
    let count = 0;

    // Size of our sliding window
    for (let i = 1; i < s.length; i++) {
        let found = {};

        // Starting index of our sliding window
        for (let j = 0; j + i <= s.length; j++) {
            let substr = s.substr(j, i);
            substr = substr.split('').sort().join('');
            if (found[substr]) {
                count += found[substr];
                found[substr]++;
            } else {
                found[substr] = 1;
            }
        }
    }

    return count;
}w
console.log(sherlockAndAnagrams("abba"));
