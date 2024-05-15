// normal function's scope->depends on calling object
// arrow function -> lexical scope -> parent call
let student = {
    Name: "Niomi",
    Age: 18,
    prop: this, //Window
    getName: function()
    {
        console.log(this);
        return this.Name;
    },
    getAge: ()=>{
        console.log(this);
        return this.Age;
    },

    getInfo1: function(){
        setTimeout(()=>{
            console.log(this); //it's parent is function() so the this of the function is student therefore student
        }, 2000);
    },

    getInfo2: function(){
        setTimeout(function(){
            console.log(this); // here setTimeout will be called by the window object so this = window
        }, 3000);
    }
}; //global scope

let a= 5; //global scope

console.log(student);
console.log(student.getName());
console.log(student.getAge());
console.log(student.getInfo1());
console.log(student.getInfo2());
