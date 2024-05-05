// print all odd numbers between 1-15

for(let i = 1; i < 16; i++)
{
    if(i % 2 !== 0)
    {
        console.log(i);
    }
}

// OR

for(let i = 1; i < 16; i+=2)
{
    console.log(i);
}

console.log("backwards");

for(let i = 15; i > 0; i-=2)
{
    console.log(i);
}