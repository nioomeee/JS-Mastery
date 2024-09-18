# Hour 1: Basics & Foundations (ES6+ Syntax)

## let, const
1. Write a `let` variable inside a block scope (e.g., within an `if` statement) and try to access it outside. What happens and why?
2. Declare a `const` array. Try adding, removing, and modifying elements of the array. Can the array be mutated? Can it be reassigned?

## Arrow Functions
3. Convert the following function into an arrow function:
    ```javascript
    function sum(a, b) {
      return a + b;
    }
    ```
4. Create an arrow function that takes no arguments and returns the string `"Hello, World!"`.

## Template Literals
5. Use template literals to create a multi-line string that includes variables like `name` and `age`.
6. Write a function that takes a string and embeds it in a sentence using template literals. Example:
    ```javascript
    function greet(name) {
      return `Hello, ${name}!`;
    }
    ```

## Default Parameters
7. Write a function that calculates the total price of an item with a default tax rate of 5%. Test the function by passing in different values.
    ```javascript
    function calculatePrice(price, taxRate = 0.05) {
      return price * (1 + taxRate);
    }
    ```

## Destructuring & Spread/Rest Operators

### Array and Object Destructuring
8. Given an array `[10, 20, 30, 40]`, destructure it to assign values to individual variables.
9. Given an object `{ name: 'Alice', age: 25, location: 'NYC' }`, destructure it to extract each property.

### Spread and Rest Parameters
10. Write a function that takes any number of arguments using the rest operator and returns their sum.
11. Combine two arrays `[1, 2, 3]` and `[4, 5, 6]` using the spread operator.

## Modules
12. Create a simple module with two functions (e.g., `add()` and `subtract()`), export them, and import them in a separate file to use.

---

# Hour 2: Functional Programming Concepts

## Functions & Scope

### Function Declarations and Expressions
1. Write a **function declaration** to multiply two numbers. Then, rewrite it as a **function expression**.
2. Illustrate hoisting by calling a function declaration and function expression before they are defined.

### Closures and Lexical Scope
3. Write a function that returns another function, demonstrating a closure by accessing a variable from the outer function.
4. Create a simple counter using closures. Every time the returned function is called, it should increment and return the counter.

## Array Methods

### map(), filter(), reduce(), forEach()
5. Use `map()` to create a new array that doubles the values from `[1, 2, 3, 4]`.
6. Write a program that uses `filter()` to extract only even numbers from an array.
7. Use `reduce()` to sum up all values in an array of numbers.
8. Write code that logs each item in an array using `forEach()`.

## Higher-Order Functions

### Functions that Take Other Functions as Arguments or Return Them
9. Write a function that takes another function as an argument and invokes it inside the body.
10. Write a function that returns a new function which always adds 5 to its argument.

### Example: Passing Callbacks
11. Write a function `doMath` that takes two numbers and a callback function (e.g., `add` or `multiply`) and returns the result of applying the callback to the numbers.

---

# Hour 3: Asynchronous JavaScript

## Promises & Async/Await

### Creating and Handling Promises
1. Create a promise that resolves after 3 seconds with the message "Success!" and use `.then()` to log the message.
2. Create a promise that randomly resolves or rejects. Use `.then()` and `.catch()` to handle both outcomes.
3. Write a promise that resolves after a delay using `setTimeout`. Chain `.then()` to log a message after the promise resolves.

### Using async and await
4. Rewrite the previous example using `async` and `await` instead of `.then()`.
5. Create an `async` function that makes two API calls (simulated with `setTimeout`) and logs the results in sequence using `await`.
6. Use `Promise.all()` with `async`/`await` to run two promises in parallel. Log the result once both are resolved.

## Fetch API

### Basic Usage of fetch()
7. Write a function that uses `fetch()` to get data from an API, like JSONPlaceholder, and log the result. Handle errors with `.catch()`.
8. Refactor the previous example to use `async`/`await` instead of `.then()`.
9. Write a function that sends a POST request using `fetch()` with some data (e.g., a user object) and log the response.

---

# Hour 4: Advanced JavaScript

## This & Arrow Functions

1. Create an object with a method using a **regular function** to log the `this` keyword. Then, rewrite the method as an **arrow function** and explain the difference in behavior.
2. Use an event listener on a button. First, use a regular function and observe the `this` keyword, then replace it with an arrow function. What changes?
3. Create a function that accepts a callback and uses `setTimeout` to delay its execution. Demonstrate how `this` works differently for regular functions and arrow functions within this context.

## Object-Oriented Programming (OOP)

### Classes, Constructors, and Inheritance
4. Create a `Car` class with properties `brand`, `model`, and `year`. Instantiate an object and log the properties.
5. Extend the `Car` class to a `ElectricCar` class with an additional `batteryCapacity` property. Create an object of this class and log all properties.
6. Write a method in the `Car` class that logs a message with `this.brand`. Override this method in the `ElectricCar` class and see how `this` behaves.

### Prototypes
7. Create a constructor function for a `Person` and add a method to its prototype. Create an instance of `Person` and call the prototype method.
8. Show how methods are inherited using the prototype chain by creating a subclass that uses its parent class's methods.

## Event Loop & Callbacks

### Understanding the Event Loop
9. Write an example that logs messages in this order:
   - A synchronous log statement
   - A promise resolved with `.then()`
   - A `setTimeout` function
10. Write a simple example that demonstrates the event loop by mixing synchronous code, a promise, and `setTimeout`. Explain the execution order.
11. Illustrate how callbacks are handled by writing a function that takes a callback and uses `setTimeout` to execute the callback asynchronously.
