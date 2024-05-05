// Write a JavaScript program to test whether the character at the given (character)
// index is lower case.

let str = prompt("Enter a string to be checked:");

let n = parseInt(prompt("Enter the index of the character to be checked: "));

let ch = str.slice(n,n+1);

if(ch === ch.toLowerCase())
{
    alert("The character is lower case");
}
else if(ch === ch.toUpperCase())
{
    alert("The character is upper case");
}
else{
    alert("Enter appropriate characters");
}