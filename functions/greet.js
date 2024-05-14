let greet = "hello";

function outerGreet()
{
    let greet = "namaste";

    console.log(greet);

    function innerGreet() //since this function isn't called it will not be printed
    {
        console.log(greet); //namaste
    }
}

console.log(greet); //hello
outerGreet(); //namaste 
