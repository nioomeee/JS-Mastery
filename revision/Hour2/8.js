// Write code that logs each item in an array using forEach().
let arr = [1, 2, 3, 4];

function print(num)
{
    console.log(num);
}

arr.forEach((num)=>{
    console.log(num);
});

arr.forEach(print);