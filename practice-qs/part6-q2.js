// Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”

let str1 = prompt("Enter your desired string: ");

function unique(str)
{
    let str2={}; //object for checking seen characters

    let chars = ""; 

    for(let i = 0; i < str.length; i++)
    {
            let char = str[i];
            if(!str2[char])
            {
                str2[char] = true;
                chars+= char;
            }
    }
    return chars;
}

let result = unique(str1);
console.log(result);
