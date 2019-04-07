// Complete the function maximumToys in the editor below. It should return an integer representing the maximum number of toys Mark can purchase.
//
// maximumToys has the following parameter(s):
//  prices: an array of integers representing toy prices
        //prices are not sorted
//  k: an integer, Mark's budget

function maximumToys(prices, k) {
    //worst sort method to use bubblesort(O(n^2))
    budget = 0
    toys = 0
    for(i = 0; i < prices.length; i++){
        for(j = 0; j < prices.length; j++){
            if(prices[j]>prices[j+1]){
                temp = prices[j]
                prices[j] = prices[j+1]
                prices[j+1] = temp
            }
        }
    }
    
}
maximumToys([3,1,2,6,5],2)
