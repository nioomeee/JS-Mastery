// Write a JavaScript function that accepts a list of country names as input and 
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output : 
// "United States of America"

let countries = [];

let n = parseInt(prompt("Enter the number of country names you'd like to enter: "));

for(let i = 0; i < n; i ++)
{
    countries[i] = prompt(`Enter country ${i+1}`);
}

function largestname(countries)
{
    let largest = countries[0];

    for(let i = 0; i < countries.length; i++)
    {
        if(countries[i].length > largest.length)
        {
            largest = countries[i];
        }
    }
    return largest;
}

let largest_country_name  = largestname(countries);

console.log(`output: ${largest_country_name}`);
