let str = "ILoveCoding";

let num = 5;

console.log(str.slice(1 ,5));
console.log(str.slice(-num));

console.log(str.replace("Love", "Do"));

let rep = str.repeat(3);

console.log(rep);

let msg = "help!";

let newmsg = msg.trim().toUpperCase();

console.log(newmsg);

let arr = ["apple", "litchi", "chickoo"];

console.log(arr);

arr[0] = "pineapple";

console.log(arr);

console.log(arr[0][1]);

arr[10] = "papaya";

console.log(arr);

let cars = ["bmw", "mercedes", "Audi", "Toyota"];

console.log(cars);

cars.push("Kia");

console.log(cars);

let month = ["january", "july", "march", "august"];

console.log(month);

console.log(month.shift());

let first = month.shift();

month.unshift("june");

console.log(month);

month.unshift(first);

console.log(month);

console.log(cars.indexOf("Toyota"));

let primary = ["red", "yellow", "blue"];

console.log(primary.includes("red"));

console.log(primary.includes("pink"));

let secondary = ["orange", "green", "violet"];

console.log(secondary);

let colors = primary.concat(secondary);

console.log(colors);

console.log(primary.reverse());

console.log(colors.slice(3,5));

console.log(colors.slice(2));

console.log(colors.slice(-2));

console.log(colors.slice(colors.length -1));

colors.splice(4);

console.log(colors);

colors.splice(0,1);

console.log(colors);

colors.splice(0, 1, "black", "brown");

console.log(colors.sort());

let months = ["january", "july", "march", "august"];

months.splice(0,2,"july", "june");

let languages = ["c", "c++","html", "JavaScript", "python", "java", "c#", "sql" ];

let revlang = languages.reverse();

console.log(revlang.indexOf("JavaScript"));

let tic = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];

tic[0][1] = 'O';





