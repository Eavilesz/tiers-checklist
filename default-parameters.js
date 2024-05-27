// Default parameter values in JavaScript, introduced in ES6 (ECMAScript 2015), allow you to initialize function parameters with default values if no argument is passed or if undefined is passed. This feature makes your functions more robust and reduces the need for additional checks within the function body.

function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet('Alice'); // Output: Hello, Alice!

// In the example above, the greet function has a default parameter value of 'Guest' for the name parameter. If no argument is passed to the function, or if undefined is passed, the default value 'Guest' will be used. If an argument is provided, it will override the default value.

// Default parameter values can also be expressions or function calls. For example:

function getDefaultAge() {
  return 21;
}

function createUser(name = 'Anonymous', age = getDefaultAge()) {
  console.log(`Name: ${name}, Age: ${age}`);
}

createUser(); // Output: Name: Anonymous, Age: 21
createUser('Alice'); // Output: Name: Alice, Age: 21
createUser('Bob', 25); // Output: Name: Bob, Age: 25

// In the example above, the createUser function has default parameter values for both name and age. The age parameter uses a function call getDefaultAge() to provide a default value of 21 if no argument is passed or if undefined is passed.

// Default parameter values are only used when the argument is undefined.If null or any other falsy value is passed, the default value is not used.
