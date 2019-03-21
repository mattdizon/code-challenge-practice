// our goal is to write a program that is capable of evali=uating simple mathmatical expresssions
// evals to 1 + 2 = 3

// 1 read expression
// 2 split expression into an array
// 3 iterate through  array if has operator place
function evaluate(expression) {
    let expressionArr = expression.split(" ")
    let formula = ""
    for(let i = 0; i < expressionArr.length; i+=2){
        if(expressionArr[0] == "+" || expressionArr[0] == "-"){
            if(expressionArr[i] === "+"){
                formula += expressionArr[i+1]
                formula += expressionArr[i]
            }
            else if(expressionArr[i] === "-"){
                formula += expressionArr[i+1]
                formula += expressionArr[i]
            }
            else{
                formula += expressionArr[i]
            }
        }


    }

    console.log(eval(formula))
}
evaluate("+ 2 + -2 + 32 4")
