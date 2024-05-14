// Write a JavaScript function to generate a random number within a range 
// (start, end).
let start = parseInt(prompt("Enter the starting range: "));

let end = parseInt(prompt("Enter the ending range: "));

let range = (end-start);

function random(start, range)
{
    let n = Math.floor(Math.random() * range)+start;

    return n;
}

let num = random(start, range);
console.log(num);
