let cars = ["BMW", "Audi", "Mercedes"];

cars.push("Porshe"); //adds to end

console.log(cars); //(4) ['BMW', 'Audi', 'Mercedes', 'Porshe']

console.log(cars.pop()); //Porshe- pop: deletes from end and returns it

console.log(cars); // (3) ['BMW', 'Audi', 'Mercedes']

cars.unshift("Ferrari"); //adds to start

console.log(cars); //(4) ['Ferrari', 'BMW', 'Audi', 'Mercedes']

console.log(cars.shift()); //deletes from start and returns it - Ferrari

console.log(cars); //(3) ['BMW', 'Audi', 'Mercedes']