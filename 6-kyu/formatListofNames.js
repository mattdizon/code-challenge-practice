// Given: an array containing hashes of names
//
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

 
//take the list of names and iterate until length - 2 @ length -2 append last 2 names with &
function list(names){
    let strList = ""
    if(names.length > 2){
        for(let i = 0; i < names.length -2; i++ ){
            strList += names[i].name + ", "
        }
        (strList += names[names.length -2].name + " & " + names[names.length -1].name )
    }else if (names.length === 2) {
        strList += names[names.length -2].name + " & " + names[names.length -1].name
    }
    else if(names.length === 1){
        strList = names[names.length -1].name
    }



  return(strList)
}
list([{name: 'Bart'}])
