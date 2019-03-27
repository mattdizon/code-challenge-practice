// Complete the checkMagazine function in the editor below. It must print Yes if the note can be formed using the magazine, or No.(Is case sensative)
//
// checkMagazine has the following parameters:
//     magazine: an array of strings, each a word in the magazine
//     note: an array of strings, each a word in the ransom note
//Output:
//     print Yes if the note can be formed using the magazine, or No.(Is case sensative)

// step 1. Create a hash for both magazine and note
// step 2. Iterate through note hash and see if value of letter is <= value of letter in the magazine hash
function checkMagazine(magazine, note) {
    let magHash = {}
    let noteHash = {}
    let possible = true
    for(let i = 0; i < magazine.length; i++){
        if(magazine[i] in magHash){
            magHash[magazine[i]] += 1
        }
        else{
            magHash[magazine[i]] = 1
        }
    }
    for(let j = 0; j<note.length; j++){

        if (note[j] in noteHash){
            noteHash[note[j]] += 1
        }
        else{
            noteHash[note[j]] = 1
        }
    }

    for(word in noteHash){
        if(word in magHash){
            if(noteHash[word] > magHash[word]){
                possible = false
            }
        }
        else{
            possible = false
        }
    }
    if(possible){
        return "Yes"
    }
    else{
        return "No"
    }


}
console.log(checkMagazine("hhelo","ho"))
