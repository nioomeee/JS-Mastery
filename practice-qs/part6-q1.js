// Write a JavaScript function that returns array elements larger than a number.

let n = parseInt(prompt("Enter any number between 1-10: "));

let arr = [1, 2, 3, 4, ,5 ,6 ,7 ,8,9,10];

for(let i = 0; i <=arr.length; i++)
{
    if(arr[i]>n)
    {
        console.log(arr[i]);
    }
}
