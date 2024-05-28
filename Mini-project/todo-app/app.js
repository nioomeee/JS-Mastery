let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);

    let Delbtn = document.createElement("button");
    Delbtn.innerText="delete";
    Delbtn.classList.add = "delete";

    item.appendChild(Delbtn);
    input.value = "";
})

ul.addEventListener("click", function(event){
    if(nodeName="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
})
// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//     })
// }


