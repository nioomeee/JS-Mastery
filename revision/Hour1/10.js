// Write a function that takes any number of arguments using the rest operator and returns their sum.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sum(...num){
    let add = 0;
    for(let i of num){
        add+=i;
    }
    return add;
}

console.log(`Sum = ${sum(...arr)}`);