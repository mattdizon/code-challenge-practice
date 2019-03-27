// Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.
//
// Complete the function sherlockAndAnagrams in the editor below. It must return an integer that represents the number of anagrammatic pairs of substrings in .
//
// sherlockAndAnagrams has the following parameter(s):
//     s: a string .
// iterate through string and get all possible combinations of sub strings
// iterate through this array of combinations and see if there is another element

function getPairs(s){
    pairs = []
    for(let i = 0; i < s.length; i++){
        for(let j = i + 1; j <= s.length; j++){
              pairs.push(s.slice(i, j));
          }
    }
    return pairs
}
function anagram(str1, str2){
  if(str1.length !== str2.length) return false;
  let lettersIn1 = {};
  let lettersIn2 = {};

  for(let i = 0; i < str1.length; i++){
    let currLetter1 = str1[i];
    let currLetter2 = str2[i];

    if(lettersIn1[currLetter1] === undefined){
      lettersIn1[currLetter1] = 1;
    }else lettersIn1[currLetter1]++;

    if(lettersIn2[currLetter2] === undefined){
      lettersIn2[currLetter2] = 1;
    }else lettersIn2[currLetter2]++;
  }

  for(let letter in lettersIn1){
    if(lettersIn1[letter] !== lettersIn2[letter]) return false;
  }

  return true;
}
function sherlockAndAnagrams(s){
    let count = 0
    let pairs = getPairs(s)
    for(let i = 1; i < pairs.length; i++){
        let current = pairs[i]
        let j = i+1

        while(j < pairs.length){
            let next = pairs[j];
            if(anagram(current, next)){
                count++;
            }
            j++;
        }
    }
    return count
}























// function anagram(str1, str2){
//   if(str1.length !== str2.length) return false;
//   let lettersIn1 = {};
//   let lettersIn2 = {};
//
//   for(let i = 0; i < str1.length; i++){
//     let currLetter1 = str1[i];
//     let currLetter2 = str2[i];
//
//     if(lettersIn1[currLetter1] === undefined){
//       lettersIn1[currLetter1] = 1;
//     }else lettersIn1[currLetter1]++;
//
//     if(lettersIn2[currLetter2] === undefined){
//       lettersIn2[currLetter2] = 1;
//     }else lettersIn2[currLetter2]++;
//   }
//
//   for(let letter in lettersIn1){
//     if(lettersIn1[letter] !== lettersIn2[letter]) return false;
//   }
//
//   return true;
// }
//
// function pairsMaker(str){
//   let output = [];
//
//   for(let i = 0; i < str.length; i++){
//     for(let j = i + 1; j <= str.length; j++)
//       output.push(str.slice(i, j));
//   }
//   console.log(output)
//   return output;
// }
//
// function sherlockAndAnagrams(s){
//   let anagramCount = 0;
//   let pairs = pairsMaker(s);
//
//   for(let i = 0; i < pairs.length; i++){
//     let currSubStr = pairs[i];
//     let j = i + 1;
//
//     while(j < pairs.length){
//       let nextSubStr = pairs[j];
//       if(anagram(currSubStr, nextSubStr)) anagramCount++;
//       j++;
//     }
//   }
//
//   return anagramCount;
// }
console.log(sherlockAndAnagrams("abba"));
