//normal function

let func = function(){
    console.log("Welcome")
}
func();

//arrow function

let arrow = () =>{
    console.log("Arrow Function")
}
arrow();

//ex2
let add = (num1, num2) =>{
    return num1 + num2;
}
console.log(add(5, 7))

//short ex2
let addition = (num1, num2) => num1+num2;
console.log(addition(10, 20));


let multiple = (a, b) => a * b;
console.log(multiple(10, 10))