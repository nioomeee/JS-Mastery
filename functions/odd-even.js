// asks the user for their request (odd or even)
let request = prompt("Enter you request(odd or even): ");

// asks tthe user for a number
let n = parseInt(prompt("Enter any number: "));

// function odd
let odd = function(n)
{
    console.log(!(n % 2 == 0));
}

// function even
let even  = function(n)
{
    console.log(n%2 == 0);
}

// Factory function to return the correct function based on user's request
function Factory(request)
{
    if(request == "odd")
    {
        return odd;
    }

    else if(request == "even")
    {
        return even;
    }

    else
    {
        console.log("Wrong request");
    }
    
}

// result of factory function is stored here in this function
let result = Factory(request);

// calling the function stored in 'result' with the entered number by the user
console.log(result(n));
