// const is used to declare a constant variable. A constant variable cannot be reassigned. this is ussed to declare a variable that should not be reassigned and this prevents accidental reassignment of a variable. but the value of the variable can be changed, for example if the variable is an object, you can change the properties of the object but you cannot reassign the variable to a new object. 

const object = {
  name: 'John',
  age: 30
};

object.age = 31; // This is valid

// let is used to declare a variable that can be reassigned. let is block scoped, which means that it is only available within the block in which it is declared. const is also block scoped.

// As a general recommendation, use const by default and only use let when you know that the variable will be reassigned. This helps to prevent accidental reassignment of variables and makes the code easier to reason about.
