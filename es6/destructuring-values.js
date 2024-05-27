// Destructuring values from an object or array is a powerful feature in JavaScript that allows you to extract multiple values from an object or array and assign them to variables in a single statement. This can make your code more concise and readable. Here are some examples of destructuring values in JavaScript:

// Destructuring values from an object:

const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const { name, age, city } = person;

console.log(name); // Output: John

// Destructuring values from an array:

const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// You can also assign default values irf an array does not have enough elements:

const [a, b, c, d = 4, e = 5] = [1, 2, 3];

console.log(d); // Output: 3
console.log(e); // Output: 5  // since there is no 5th element in the array, the default value is used

// Destructuring values from a nested object:

const user = {
  id: 1,
  name: 'John',
  address: {
    zipCode: '12345',
    country: 'USA'
  }
};

const { id, address: { zipCode, country } } = user;

console.log(id); // Output: 1
console.log(zipCode); // Output: 12345


