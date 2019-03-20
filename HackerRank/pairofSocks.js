// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
//
// For example, there are  7socks with colors . There is one pair of color 1 and one of 2 color . There are three odd socks left, one of each color. The number of pairs is 2.
//
// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.
//
// sockMerchant has the following parameter(s):
//
// n: the number of socks in the pile
// ar: the colors of each sock
//
// The first line contains an integern , the number of socks represented in ar.
//
// The second line contains n space-separated integers describing the colors ar[i]  of the socks in the pile.
function sockMerchant(n, ar) {
let sockHash = {}
let pairs = 0
for(let i = 0; i <= ar.length -1; i++){
    if (!(ar[i] in sockHash)){
        sockHash[ar[i]] = 1
    }
    else{
        sockHash[ar[i]] += 1
    }
}
console.log(sockHash)
for(let key in sockHash){
    let pair = parseInt((sockHash[key]),10) /2
    if(pair % 2 == 0 || sockHash[key]>1){
        pairs += parseInt(pair,10)
    }

}
return(pairs)


}

sockMerchant('n', [1,1,3,1,2,1,3,3,3,3])
