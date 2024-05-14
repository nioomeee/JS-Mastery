console.log("hi");

let id = setInterval(()=>{
    console.log("Niomi");
}, 3000);

console.log("I am");

setTimeout(()=>{
    clearInterval(id);
}, 9000);

