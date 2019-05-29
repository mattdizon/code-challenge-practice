/*
Given the index of the song that is currentlly playing, determine the min number of button presses to reqch requested song. You can only go up or down

    Input: songs - an array of songs
           k - index of current song
           q - the name of the song you want to play next
    Output: an integer

    Example:
        Input:  [a,b,c,d,e]
                1
                e
        Output: 2 since if we go up 2 we will reach it
*/
function playlist(songs, k, q){
    let requestedIdx = songs.indexOf(q)
    let len = songs.length
    let min = 0
    if (k <= len/2 && requestedIdx <= len/2){
        min = requestedIdx - k
    }
    else if(k > len/2 && requestedIdx > len/2) {
        min = requestedIdx - k
    }
    else if (k < len/2 && requestedIdx >= len/2){
        min = k - requestedIdx + len
    }
    else if (k > len/2 && requestedIdx < len/2){
        min = k - requestedIdx - len
    }

    console.log(Math.abs(min))
}
// current song is idx 1
// requested song is idx 4
//
//
playlist(['a','b','c','d','e','f','g','h'],6,'c')
