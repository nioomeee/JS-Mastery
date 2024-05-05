let n = parseInt(prompt("Enter the number of last digits to be printed"));

let arr = [7, 9, 0 , -2];

if(n <= 0)
{
    alert("Enter proper number to be printed");
}
else{
    alert(arr.slice(-n));
}