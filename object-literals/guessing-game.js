let user = parseInt(prompt("Enter the maximum number: "));

let n = prompt("Guess the number / type 'quit' to quit the game: ");

let random = Math.floor(Math.random()*user)+1;

while(n!== 'quit')
{
    if(n == random)
    {
        alert("You've guessed correct");
        break;
    }
    else{
        if(parseInt(n) > random)
        {
            n = prompt("Enter a smaller number! Guess again/ type 'quit' to quit the game: ");

        }
        else
        {
            n = prompt("Enter a larger number! Guess again/ type 'quit' to quit the game: ");
        }
        
    }
    
}

if(n === 'quit')
    {
        alert("Quitting game");
    }

