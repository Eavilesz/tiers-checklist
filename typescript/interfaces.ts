// interfaces in typescript are used to define the structure of an object. They can be used to define the shape of an object, including the properties and methods it should have. Interfaces can also be used to define custom types that can be used throughout your codebase.

// Here is an example:

// let person: Person = {
//   name: "Alice",
//   age: 30,
// };
// In this example, we define an interface called Person that has two properties: name and age. We then create an object person that conforms to this interface.

// We can also have optional properties in an interface by using the ? operator:

// interface Person {
//   name: string;
//   age?: number;
// }

// readonly properties can be defined using the readonly keyword, and they mean that the property cannot be changed once it is set:

// interface Person {
//   readonly name: string;
//   age: number;
// }

// Hybrid types are types that can be used to combine different types, such as objects and functions:

// interface Counter {
//   (start: number): string;
//   interval: number;
//   reset(): void;
// }

