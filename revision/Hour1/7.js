// Write a function that calculates the total price of an item with a default tax rate of 5%. Test the function by passing in different values.
// function calculatePrice(price, taxRate = 0.05) {
//   return price * (1 + taxRate);
// }

let fun = (price, tax=0.05)=>{
    return price + (tax*price);
}

let n1 = fun(100, 5);
let n2 = fun(100);
let n3 = fun(100, 6);

console.log(`price 1= ${n1}`);
console.log(`price 2= ${n2}`);
console.log(`price 3= ${n3}`);
