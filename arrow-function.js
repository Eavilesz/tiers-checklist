// Arrow functions in JavaScript provide a concise syntax for writing functions. They were introduced in ECMAScript 6 (ES6) and offer a more compact and expressive way to define functions compared to traditional function expressions.

// Example:

// Traditional function expression
function add(a, b) {
  return a + b;
  }
  
  // Arrow function
  const add = (a, b) => a + b;
  
  // Arrow functions have the following characteristics:
  
  // Arrow functions have a shorter syntax compared to traditional function expressions, especially for simple one-liner functions. They omit the function keyword and use a fat arrow => to separate the parameters from the function body.
  
  // Arrow functions do not have their own this context. Instead, they inherit this from the surrounding lexical context (the scope in which they are defined). This behavior can be useful for maintaining the context of this in nested functions or event handlers.
  
  // Arrow functions with a single expression in the function body automatically return the result of that expression without needing an explicit return statement. This makes the code more concise for simple operations.

