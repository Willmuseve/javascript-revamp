let addition = function(a, b){
    return a + b;
}

let multiplication = function(a, b){
    return a * b;
}

function calculator(num1, num2, add, mult){
    let addresult = add(num1, num2)
    let multresult = mult(num1, num2)
    let result = `Add: ${addresult}, mult: ${multresult}`;
    console.log(result)
}
calculator(10, 10, addition, multiplication)