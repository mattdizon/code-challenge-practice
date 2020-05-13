/*
    Reverse and Combine Words
    1. More than one word? Reverse each word and combine first with second, third with fourth and so on... (odd number of words => last one stays alone, but has to be reversed too)
    2. Start it again until there's only one word without spaces
    3. Return your result...

    Input:  "abc def"
    Output: "cbafed"
    Proccess: iterate through the sentence and with each word we should reverse it.
    then concat the first word with the second word

    Example: 
        convert string to an arr sep by " " => [abc, def]
        reverse both at once => [cba, fed]
        concat words cbafed
        inc + 2
        end loop
*/

const reverse = (str) => {
    let res = []
    str = str.split(" ")
    if(str.length === 1){
        return str.join(" ")
    }
    res = str
    do {
        let temp = res
        res = []
        for(let i = 0; i < temp.length; i+=2){
            if(temp[i+1] !== undefined){
                res.push(temp[i].split("").reverse().join("")+temp[i+1].split("").reverse().join(""))
            }
            else{
                res.push(str[i].split("").reverse().join(""))
            }
        }
        res = res.join(" ").split(" ")
    }
    while(res.length !== 1)
    return res.join(" ")
}
console.log(reverse('sdfsdf wee sdffg 342234 ftt'))


// abc def jkl
// cbafed lkj
// defabcjkl