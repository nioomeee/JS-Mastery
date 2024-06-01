let h1 = document.querySelector("h1");

function Changecolor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5)+1;
            if(num > 3)
            {
                reject("promise rejected");
            }
            else{
                h1.style.color = color;
                console.log(`${color} was displayed`);
                resolve("Color changed");
            }
        }, delay);
    })
}

async function demo(){
    try 
    {await Changecolor("red", 1000);
    await Changecolor("blue", 1000);
    await Changecolor("pink", 1000);
    await Changecolor("yellow", 1000);}
    catch(err){
        console.log("error caught");
        
    }

    let a = 5;
    console.log(a);
    console.group("New number: ",a+3);
}

console.log(demo());