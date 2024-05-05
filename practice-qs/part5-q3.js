// Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States
let Person = {
    Name: "Joey",
    Age: 24,
    City: "Queens"
};

console.log(Person);

Person.City = "New York";

console.log(Person);

Person.Country = "United States";

console.log(Person);