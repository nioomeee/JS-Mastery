// Illustrate hoisting by calling a function declaration and function expression before they are defined.4

console.log(add(5,10)); //declaration function can be aclled before actually defining the function
console.log(sub(10, 5)); //function expression can't be called before definig the function

function add(a, b){
    return a+b;
}

let sub = function(a, b){
    return a+b;
}