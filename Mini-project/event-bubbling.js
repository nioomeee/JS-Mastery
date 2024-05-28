let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

div.addEventListener("click", function(){
    console.log("Div was clicked");
})

ul.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("Ul was clicked");
})

for(item of li){
    item.addEventListener("click", function(event){
        event.stopPropagation();
        console.log("List item was clicked");
    })
}