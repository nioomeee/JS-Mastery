// Write a function that takes another function as an argument and invokes it inside the body.

function execute(print)
{
    console.log(`Before`);
    print();
    console.log(`After`);
}

function print()
{
    console.log("Hello World!");
}

execute(print);