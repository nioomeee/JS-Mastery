const student ={
    Name: "Niomi",
    Age: 18,
    Marks: 94.2,
    City: "Ahmedabad"
};

console.log(student);

console.log("changing the city to banglore");

student.City = "Banglore";

console.log(student);

console.log("Adding a new property - gender");

student.gender = "Female";

console.log(student);

console.log("Changing marks to A+");

student.Marks = "A+";

console.log(student);

console.log("Storing array of marks");

student.Marks = [99, 87,92]; 

console.log(student);

console.log("Deleting the marks from the student object");

delete student.Marks;

console.log(student);





