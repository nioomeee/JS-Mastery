// Write a JS program to find the sum of digits in a number
let num = parseInt(prompt("Enter your desired number: "));
let sum = 0; 
let digits;

for(let i = 0; i <String(num).length; i++)
{
   let digit = num%10;
   sum+=digit;

   num = Math.floor(num/10);
}

alert(sum);
