h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("Color changed!");
        }, delay);
    });
}

let request = changeColor("red", 1000)
.then(()=>{
    console.log("Red color was displayed");
    return changeColor("orange", 1000);
})
.then(()=>{
    console.log("Orange color was displayed");
    return changeColor("green", 1000);
})
.then(()=>{
    console.log("Green color was displayed");
    return changeColor("blue", 1000);
})
.then(()=>{
    console.log("Blue color was displayed");
})

// changeColor("red", 1000, ()=>{
//     changeColor("orange", 1000, ()=>{
//         changeColor("green", 1000, ()=>{
//             changeColor("yellow", 1000);
//         });
//     });
// });
