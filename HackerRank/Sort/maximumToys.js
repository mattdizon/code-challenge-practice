// Complete the function maximumToys in the editor below. It should return an integer representing the maximum number of toys Mark can purchase.
//
// maximumToys has the following parameter(s):
//  prices: an array of integers representing toy prices
        //prices are not sorted
//  k: an integer, Mark's budget

function maximumToys(prices, k) {
    //worst sort method to use bubblesort(O(n^2))
    let budget = 0
    let toys = 0
    for(let i = 0; i < prices.length; i++){
        for(let j = 0; j < prices.length; j++){
            if(prices[j]>prices[j+1]){
                let temp = prices[j]
                prices[j] = prices[j+1]
                prices[j+1] = temp
            }
        }
    }
    let idx = 0
    while(budget <= k){
        if(budget + prices[idx] <= k){
            budget += prices[idx]
            idx++
            toys++
        }
        else{
            break
        }
    }
    return toys
}
