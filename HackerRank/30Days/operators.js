// Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost.

// Input:
    // mealCost float
    // tipPercent int
    // taxPercent int
//Output:
    // totalCost

function solve(meal_cost, tip_percent, tax_percent) {
    let solution = (meal_cost + (meal_cost * (tip_percent/100)) + (meal_cost * (tax_percent/100)))
    console.log(Math.round(solution))
}
console.log(solve(10.25,17,5));
