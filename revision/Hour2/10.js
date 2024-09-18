// Write a function that returns a new function which always adds 5 to its argument.

function fun(){
    return function(num)
    {
        return num+=5;
    }
}

let count = fun();

console.log(count(10));