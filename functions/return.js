function Adult(age)
{
    if(age>=18)
    {
        return "adult";
    }
    else
    {
        return "not adult";
    }
}

let age = prompt("Enter your age:");
alert(Adult(age));
