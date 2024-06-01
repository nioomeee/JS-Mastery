let jsonRes = '{"fact":"A cat usually has about 12 whiskers on each side of its face.","length":61}';

console.log(jsonRes);

let validRes = JSON.parse(jsonRes);

console.log(validRes);
console.log(validRes.fact);

let student={
    Name: "Niomi",
    Marks: 85.85
};

let jsonStud = JSON.stringify(student);
console.log(jsonStud);







