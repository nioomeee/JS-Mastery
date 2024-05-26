let students = [
    {
        Name: "Niomi",
        Marks: 85.85
    },
    {
        Name: "Vinay",
        Marks: 90.5
    },
    {
        Name: "Sarthak",
        Marks: 89
    }]

let gpa = students.map((el)=>{
    return (el.Marks/10).toFixed(2);
});

console.log(students.forEach((student)=>{
    console.log(student.Name);
}));

gpa.forEach((grade)=>{
    console.log(grade);
});

