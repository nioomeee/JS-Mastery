// Print the factorial of a number n
let n = parseInt(prompt("Enter your number: "));

let fact = 1;

for(let i = 1; i <= n; i ++)
{
   fact *= i;
}

alert(fact);