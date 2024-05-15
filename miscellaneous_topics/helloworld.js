// write a function that prints "Hello World" 5 times at interals of 2s each
let Hello = setInterval(()=>{
    console.log("Hello World");
}, 2000);

setTimeout(()=>{
    clearInterval(Hello);
}, 10000);

