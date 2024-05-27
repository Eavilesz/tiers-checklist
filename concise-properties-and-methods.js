// Concise properties allow you to define properties in an object literal without repeating the key and value if they have the same name.

// Before ES6, you would typically define object properties like this:

// const x = 1;
// const y = 2;

// const point = {
//   x: x,
//   y: y
// };

// With ES6, you can use concise properties to simplify this:

// const x = 1;
// const y = 2;

// const point = { x, y };

// you can also use concise methods to define methods in an object literal without the function keyword:

const person = {
  name: 'John',
  age: 30,
  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

// person.introduce(); // Output: Hi, my name is John and I am 30 years old.
