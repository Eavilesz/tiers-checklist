// TypedArrays are a collection of arrays that are optimized for storing and manipulating binary data.

// The TypedArray object represents an array of binary data. It allows you to work with binary data in a more efficient and structured way than using regular arrays.

// Below are some common TypedArray objects in JavaScript:

// Int8Array: An array of 8-bit signed integers.
// Uint8Array: An array of 8-bit unsigned integers.
// Int16Array: An array of 16-bit signed integers.

// Map is a collection of key-value pairs where each key can be of any type. It is similar to an object, but with some key differences:

// The keys in a Map can be of any type, including objects and functions.
// The keys in a Map are ordered, while the keys in an object are not.

// Here's an example of creating and using a Map in JavaScript:

// Create a new Map 

const myMap = new Map();

// Add key-value pairs to the Map

myMap.set('name', 'John');
myMap.set(1, 'One');
myMap.set(true, 'True');

// Get the value associated with a key

console.log(myMap.get('name')); // Output: John
console.log(myMap.get(1)); // Output: One
console.log(myMap.get(true)); // Output: True

// Check if a key exists in the Map

console.log(myMap.has('name')); // Output: true

// A Set is a collection of unique values where each value can be of any type. It is similar to an array, but with some key differences:

// A Set can only contain unique values, while an array can contain duplicate values.
// The values in a Set are ordered, while the values in an array are not.

// Here's an example of creating and using a Set in JavaScript:

// Create a new Set

const mySet = new Set();

// Add values to the Set

mySet.add('apple');
mySet.add('banana');
mySet.add('apple'); // Duplicate values are ignored

// Check if a value exists in the Set

console.log(mySet.has('apple')); // Output: true

// Delete a value from the Set

mySet.delete('banana');

// Get the size of the Set  

console.log(mySet.size); // Output: 1
