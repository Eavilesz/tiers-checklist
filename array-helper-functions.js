// The array helper functions in JavaScript, such as map(), filter(), reduce(), and find(), provide powerful tools for working with arrays. These functions allow you to perform common operations on arrays, such as transforming elements, filtering elements based on a condition, reducing an array to a single value, and finding a specific element in an array. Here are some examples of using array helper functions in JavaScript:

// 1. from() - creates a new Array instance from an array-like or iterable object:

const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const arr = Array.from(arrayLike);
console.log(arr); // Output: ['a', 'b', 'c']

// 2. find() - returns the first element in an array that satisfies a provided condition:

const numbers = [1, 2, 3, 4, 5];

const evenNumber = numbers.find(num => num % 2 === 0);
console.log(evenNumber); // Output: 2 

// 3. filter() - creates a new array with all elements that pass a provided condition:

const numArray = [1, 2, 3, 4, 5];

const evenNumbers = numArray.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// 4. map() - creates a new array with the results of calling a provided function on every element in the array:

const names = ['John', 'Jane', 'Alice'];

const nameLengths = names.map(name => name.length);
console.log(nameLengths); // Output: [4, 4, 5]

// 5. reduce() - applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value:

const numbersArr = [1, 2, 3, 4, 5];

const sum = numbersArr.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

