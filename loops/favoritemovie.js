let favorite = "Shrek";

let guess = prompt("Guess my favourite movie XD:");

while((guess!=favorite))
{
    if(guess=='quit')
    {
        break;
    }

    console.log(`Wrong guess`);
    
    guess=prompt("Guess the movie and type 'quit' to quit the game");
}
if(guess==favorite)
{
    console.log("Congratulations you guessed the correct movie");
}

