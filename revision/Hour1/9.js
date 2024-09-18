// Given an object { name: 'Alice', age: 25, location: 'NYC' }, destructure it to extract each property.
let person = {
    nam: 'Alice', age: 25, loc: 'NYC'
};

let { nam, age, loc } = person;

console.log(nam);
console.log(age);
console.log(loc);
