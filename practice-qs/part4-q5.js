// Find the largest number in an array with only positive number
let arr = [];

let n = parseInt(prompt("Enter the length you want of the array: "));

for(let i = 0; i < n; i ++)
{
    arr[i] = prompt(`Enter element ${i}:`);
}

let max = arr[0];

for(let i = 0; i < n; i ++)
{
    if(max < arr[i])
        {
            max = arr[i];
        }
}

alert(`The largest element of the array is: ${max}`);
