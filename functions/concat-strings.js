let str = ["hi", "hello", "bye", "!"];

function Concat(str)
{
    let result = "";

    for(let i = 0; i < str.length; i ++)
    {
        result+= str[i];
    }
    return result;
}

console.log(Concat(str));