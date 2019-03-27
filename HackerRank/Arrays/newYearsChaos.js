// It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. Initial positions increment by 1 from 1 at the front of the line to n at the back.
//
// Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if n=8 and person 5 bribes person 4 , the queue will look like this: 1,2,3,5,4,6,7,8
//
// Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!
//
// Complete the function minimumBribes in the editor below. It must print an integer representing the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible.
//
// Print an integer denoting the minimum number of bribes needed to get the queue into its final state. Print Too chaotic if the state is invalid, i.e. it requires a person to have bribed more than 2 people.

// Complete the function minimumBribes in the editor below. It must print an integer representing the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible.
//
// minimumBribes has the following parameter(s):
// q: an array of integers

//  Print Too chaotic if the state is invalid, i.e. it requires a person to have bribed more than 2 people

// Input: Array of numbers
// Output: number of bribes or if a single person looks to have bribed more than 2 people.

// steps initialize a counter for numBribes
// loop through the array
// if arr[i] > 3 return tooChaotic
// if q[i] > q[i+1]
// increment bribes and swap elements for next iteration of the for loop
// this is essentially a sorting algo

function minimumBribes(q){
let bribes = 0
let swapped = true
let tooChaotic = false

while(swapped){
    for(let i = 0; i < q.length; i++){
        swapped = false
        if(q[i] - 0 > 3){
            tooChaotic = true
        }
        if (q[i] && q[i + 1] && q[i] > q[i + 1]) {
            let temp = q[i];
            q[i] = q[i + 1];
            q[i + 1] = temp;
            swapped = true;
            bribes++;
        }
    }

    }
    if (tooChaotic) {
           console.log("Too chaotic");
       } else {
           console.log(bribes);
       }
}

(minimumBribes([2,5,1,3,4]))
