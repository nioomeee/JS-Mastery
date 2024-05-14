function outerFunc()
{
    let a = 5;
    let b = 10;

    function innerFunc() //function scope i.e. can only be used inside the outerFunc
    {
        console.log(a); 
        // a is defined in outer function still it can be used in this function
        // this is called lexical scope

        // let x = 25;
    }
    // console.log(x); //this value will not be displayed because the value 
    // of x is declared in inner function which cannot be accessed by outer function

    innerFunc();
}

outerFunc();