// Write a let variable inside a block scope (e.g., within an if statement) and try to access it outside. What happens and why?
if(5 > 7)
{
    let a = "small";
}

console.log(a);