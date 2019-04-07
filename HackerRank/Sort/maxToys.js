function maximumToys(prices, k){
    let budget = 0
    let toys = 0
    let idx = 0
    prices.sort(function(a, b){return a - b})
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
    console.log(toys);
    return toys
}
maximumToys([3,1,4,2],2)
