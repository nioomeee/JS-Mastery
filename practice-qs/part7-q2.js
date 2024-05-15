// write an arrow function named Even() that takes a 
// single number as an arguement and returns if it's even or not 

let n = parseInt(prompt("Enter any number: "));

const Even = (n)=>{
    if(n%2 == 0)
    {
        return "Even";
    }
    else 
    {
        return "not Even";
    }
};

console.log(`${n} is a ${Even(n)} number`);