// Use reduce() to sum up all values in an array of numbers.

let arr=[1, 2, 3, 4, 5];

let sum = arr.reduce((acc, curr)=>{
    return acc+curr;
}, 0);

console.log(sum);