// The spread operator in JavaScript, represented by three dots (...), is a versatile and powerful feature introduced in ES6. It allows you to spread the elements of an iterable (like an array or object) into individual elements. This can be useful for various operations, such as combining arrays, cloning objects, and passing multiple arguments to functions.

// Here are some common use cases for the spread operator:

// 1. Cloning arrays:

const originalArr = [1, 2, 3];
const clonedArr = [...originalArr]; // [1, 2, 3]

// 2. Combining arrays:

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// 3. Passing multiple arguments to a function:

const numbers = [1, 2, 3];

function sum(a, b, c) {
  return a + b + c;
}

const result = sum(...numbers); // 6

// you can do the same with objects:

const originalObj = { name: 'John', age: 30 };

const clonedObj = { ...originalObj }; // { name: 'John', age: 30 }

// you can also combine objects:

const obj1 = { name: 'John' };
const obj2 = { age: 30 };

const combinedObj = { ...obj1, ...obj2 }; // { name: 'John', age: 30 }  // if there are duplicate keys, the last one wins

