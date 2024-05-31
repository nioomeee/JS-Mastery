h1 = document.querySelector("h1");

function changeColor(color, delay, next){
    setTimeout(()=>{
        h1.style.color = color;
        if(next){
            next();
        }
    }, delay);
}

changeColor("red", 1000, ()=>{
    changeColor("orange", 1000, ()=>{
        changeColor("green", 1000, ()=>{
            changeColor("yellow", 1000);
        });
    });
});

// callback nesting -> callback hell because it is very tough to understand