let arr = [1, 2, 3, 4, 5, 6, 2, 3];

let num = parseInt(prompt("Enter the number you want to be deleted"));

for(let i =0; i < arr.length; i ++)
{
    if(arr[i] == num)
    {
        arr.splice(i, 1);
    }
}
console.log(arr);
