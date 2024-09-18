// Write a function that returns another function, demonstrating a closure by accessing a variable from the outer function.

function create(){
    let count = 0;

    return function(){
        count++;
        return count;
    }
}

counter = create();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());