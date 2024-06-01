h1 = document.querySelector("h1");

function changeColor(color, delay){
    new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("Color changed!");
        }, delay);
    });
}

// changeColor("red", 1000, ()=>{
//     changeColor("orange", 1000, ()=>{
//         changeColor("green", 1000, ()=>{
//             changeColor("yellow", 1000);
//         });
//     });
// });
