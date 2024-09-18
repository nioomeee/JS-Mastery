// Write a function doMath that takes two numbers and a callback function (e.g., add or multiply) and returns the result of applying the callback to the numbers.

function doMath(a, b, add)
{
    return add(a, b);
}

function add(a, b){
    return a+b;
}

console.log(doMath(5,4, add));