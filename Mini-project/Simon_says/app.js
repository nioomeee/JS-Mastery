let gameSeq = [];

let userSeq = [];

let btns = ["pink", "blue", "green", "orange"];

let started = false;

let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(!started){
        console.log("started");
        started = true;
        levelUp();
    }
});

function GFlash(btn){
    btn.classList.add("gflash");
    
    setTimeout(function(){
        btn.classList.remove("gflash");
    }, 250);
}

function UFlash(btn){
    btn.classList.add("userflash");
    
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){

    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIndx = Math.floor(Math.random() * btns.length);
    let randClr = btns[randomIndx];
    let randbtn = document.querySelector(`.${randClr}`);

    gameSeq.push(randClr);

    console.log(gameSeq);

    GFlash(randbtn);
}

function Check(indx){

    if(userSeq[indx] === gameSeq[indx])
    {
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else
    {
        h2.innerText = `Game Over! Press any key to start.`;
        started = false;
        gameSeq = [];
        level = 0;
    }
}

function btnPress(){

    console.log(this);
    let btn = this;

    UFlash(btn);

    let Ubtn = btn.getAttribute("id");
    userSeq.push(Ubtn);

    console.log(userSeq);

    Check(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");

for(let btn of allbtns){
    btn.addEventListener("click", btnPress);
}

// let gameSeq = [];
// let userSeq = [];
// let btns = ["pink", "blue", "green", "orange"];
// let started = false;
// let level = 0;
// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function(){
//     if (!started) {
//         console.log("started");
//         started = true;
//         levelUp();
//     }
// });

// function GFlash(btn){
//     btn.classList.add("gflash");
//     setTimeout(function(){
//         btn.classList.remove("gflash");
//     }, 250);
// }

// function UFlash(btn){
//     btn.classList.add("userflash");
//     setTimeout(function(){
//         btn.classList.remove("userflash");
//     }, 250);
// }

// function levelUp(){
//     userSeq = [];
//     level++;
//     h2.innerText = `Level ${level}`;

//     let randomIndx = Math.floor(Math.random() * btns.length);
//     let randClr = btns[randomIndx];
//     let randbtn = document.querySelector(`.${randClr}`);

//     gameSeq.push(randClr);

//     console.log(gameSeq);

//     GFlash(randbtn);
// }

// function Check(indx){
//     if (userSeq[indx] === gameSeq[indx]) {
//         if (userSeq.length === gameSeq.length) {
//             setTimeout(levelUp, 1000);
//         }
//     } else {
//         h2.innerText = `Game Over! Press any key to start.`;
//         started = false;
//         gameSeq = [];
//         level = 0;
//     }
// }

// function btnPress(){
//     console.log(this);
//     let btn = this;

//     UFlash(btn);

//     let Ubtn = btn.getAttribute("id");
//     userSeq.push(Ubtn);

//     console.log(userSeq);

//     Check(userSeq.length - 1);
// }

// let allbtns = document.querySelectorAll(".btn");
// for (let btn of allbtns) {
//     btn.addEventListener("click", btnPress);
// }
// let gameSeq = [];
// let userSeq = [];
// let btns = ["pink", "blue", "green", "orange"];
// let started = false;
// let level = 0;
// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function(){
//     if (!started) {
//         console.log("started");
//         started = true;
//         levelUp();
//     }
// });

// function GFlash(btn){
//     btn.classList.add("gflash");
//     setTimeout(function(){
//         btn.classList.remove("gflash");
//     }, 250);
// }

// function UFlash(btn){
//     btn.classList.add("userflash");
//     setTimeout(function(){
//         btn.classList.remove("userflash");
//     }, 250);
// }

// function levelUp(){
//     userSeq = [];
//     level++;
//     h2.innerText = `Level ${level}`;

//     let randomIndx = Math.floor(Math.random() * btns.length);
//     let randClr = btns[randomIndx];
//     let randbtn = document.querySelector(`.${randClr}`);

//     gameSeq.push(randClr);

//     console.log(gameSeq);

//     GFlash(randbtn);
// }

// function Check(indx){
//     if (userSeq[indx] === gameSeq[indx]) {
//         if (userSeq.length === gameSeq.length) {
//             setTimeout(levelUp, 1000);
//         }
//     } else {
//         h2.innerText = `Game Over! Press any key to start.`;
//         started = false;
//         gameSeq = [];
//         level = 0;
//     }
// }

// function btnPress(){
//     console.log(this);
//     let btn = this;

//     UFlash(btn);

//     let Ubtn = btn.getAttribute("id");
//     userSeq.push(Ubtn);

//     console.log(userSeq);

//     Check(userSeq.length - 1);
// }

// let allbtns = document.querySelectorAll(".btn");
// for (let btn of allbtns) {
//     btn.addEventListener("click", btnPress);
// }
