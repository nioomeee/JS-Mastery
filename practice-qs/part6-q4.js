// Write a JavaScript function to count the number of vowels in a String 
// argument.

let str = prompt("Enter the string: ");

let str1 = str.toLowerCase();

function countVowels(str1)
{
    let count = 0;

    for(let i = 0; i < str.length; i++)
    {
        if(str1[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] =='o' || str[i] =='u')
        {
            count++;
        }
    }

    return count;

}

let no_of_vowels = countVowels(str);

console.log(`The number of vowels in "${str}" are ${no_of_vowels}`);