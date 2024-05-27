// backtick strings are used to create multi-line strings and to embed expressions in strings by using ${expression} syntax.

// Here's an example of a multi-line string:

let multiLineString = `This is
a multi-line
string.`;
console.log(multiLineString);
// This is
// a multi-line
// string.

// Here's an example of embedding an expression in a string:

let name = 'John';
let age = 25;
let sentence = `My name is ${name} and I am ${age} years old.`;
console.log(sentence); // My name is John and I am 25 years old.


