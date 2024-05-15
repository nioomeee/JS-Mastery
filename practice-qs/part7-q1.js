// write an arrow function named array avg that accepts any array 
// of nums and returns the avg of those nums
let n = parseInt(prompt("Enter the number of elements you want in an array"));

let arr = [];

for(let i = 0; i < n; i ++)
{
    let element = parseInt(prompt(`Enter element ${i+1}`));
    if(isNaN(element))
    {
        alert("Enter proper number");
        i--;
    }
    else{
        arr.push(element);
    }
}

let avg = (arr)=>{
    let sum = 0;
    for(let i =0; i < arr.length; i ++)
    {
        sum+= arr[i];
    }
    return sum / arr.length;
};

console.log(`The average of ${n} values of the array is: ${avg(arr)}`);