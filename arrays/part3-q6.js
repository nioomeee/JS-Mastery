// Write a JavaScript program to check if an element exists in an array or not
let nums = [1,3,7,9];

let n = parseInt(prompt("Enter any odd number between 1-9: "));

if(nums.includes(n) == true)
{
    alert("The given number is an odd number between 1-9");
}
else 
{
    alert("The given number is NOT an odd number between 1-9");

}