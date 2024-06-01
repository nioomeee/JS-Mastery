h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("Color changed!");
        }, delay);
    });
}

let request = changeColor("red", 1000);
console.log(request);

request = changeColor("Blue", 5000);
console.log(request);
// changeColor("red", 1000, ()=>{
//     changeColor("orange", 1000, ()=>{
//         changeColor("green", 1000, ()=>{
//             changeColor("yellow", 1000);
//         });
//     });
// });
