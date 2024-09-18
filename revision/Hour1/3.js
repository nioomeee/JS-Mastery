// Convert the following function into an arrow function:
// function sum(a, b) {
//   return a + b;
// }

let a= 5;
let b = 10;


let sum=(a, b)=>{
    return a+b;
}


ans=sum(a, b);

document.write(`The sum of ${a} and ${b} = ${ans}`);