// Write a function declaration to multiply two numbers. Then, rewrite it as a function expression.

console.log(multiply(10, 5));

// Function declaration
function multiply(a, b) {
    return a * b;
}

// Function expression
let mul = function(c, d){
    return c*d;
}

console.log(mul(10, 5));
