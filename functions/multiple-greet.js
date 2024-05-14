
function multipleGreet(greet, n) // Higher order function
{
    for(let i = 1; i <=n; i ++)
    {
        greet();
    }
}

let greet = function()
{
    console.log("HEllo");
}

multipleGreet(greet, 3);

multipleGreet(function(){console.log("namaste")}, 2);