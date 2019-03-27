// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges,
// awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.
//
// We define the rating for Alice's challenge to be the triplet a =(a[0].a[1], a[2]), and the rating for Bob's challenge to be the triplet b =(b[0].b[1], b[2]).
//
// Your task is to find their comparison points by comparing a[0] with b[0] ,a[1] with b[1] , and a[2] with a[2].
//
// If a[i],b[i]then Alice is awarded  point.
// If b[i],a[i]  then Bob is awarded  point.
// If a[i]  ,b[i] then neither person receives a point.
// Comparison points is the total points a person earned.
//
// Complete the function compareTriplets in the editor below.
// It must return an array of two integers, the first being Alice's score and the second being Bob's.

function compareTriplets(a, b) {
    let alice = 0
    let bob = 0

    for (let i = 0; i <= a.length-1; i++){
        if (a[i] > b[i]) {
            alice += 1
        }
        else if (a[i] < b[i]) {
            bob += 1
        }
    }

    return [alice,bob]

}
