async function greet(){
    throw "weak connection";
    return "hello";
}

greet().then((result)=>{
    console.log("Promise fulfilled");
    console.log("result was: ",result);
})
.catch((err)=>{
    console.group("Promise rejected with an error: ",err);
})

let demo = async ()=>{
    return 5;
}

console.log(demo());