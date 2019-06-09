function rev(num){
    let x = (num.toString().split(""))
    let newNum = ""
    if(x[0] === "-"){
        newNum+=(x[0])
        for(let i = x.length - 1; i > 0; i --){
            newNum += (x[i])
        }
    }
    else{
        for(let i = x.length - 1; i >= 0; i --){
            newNum += (x[i])
        }
    }
    console.log(newNum.toString())
}
rev(321)