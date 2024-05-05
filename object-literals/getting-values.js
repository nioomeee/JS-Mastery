let student = {
    Name: "Niomi",
    Age: 18,
    null: "a",
    0: "b",
    true: "c",
    undefined: "d"
};

console.log(student["Name"]);
console.log(student.Age);

let age = "Age";

console.log(student[age]);

// JS converts the values inside the square braces to a string and then 
// searches inside the object for the same string as a key 

console.log(student[null]);
console.log(student[0]);
console.log(student[true]);
console.log(student[undefined]);
// console.log(student.1); //Undefined
console.log("------------------");
console.log(student.null);
console.log(student.true);
console.log(student.undefined);