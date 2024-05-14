{
    let a= 5;
    const b = 10;
}

// console.log(a); -- won't work because 
// block scope applies to let and const 
// keywords and the varibales defined 
// using the can't be used outside of the 
// curly braces{}

// Ex: for loops: 
for(let i = 0; i < 6; i ++)
{
    console.log(i);
}

console.log(i); //--generstes an error because i is defined inside the block