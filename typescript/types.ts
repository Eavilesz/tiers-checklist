// Basic types in TypeScript include:

// Boolean: Represents a boolean value (true or false).
// Number: Represents a numeric value (integer or floating-point).
// String: Represents a sequence of characters.
// Array: Represents a list of elements of a specific type.

// Below is an example of defining and using basic types in TypeScript:

// Boolean
let isDone: boolean = false;

// Number

let decimal: number = 6;

let hex: number = 0xf00d;

let binary: number = 0b1010;

// enum type is a way of giving more friendly names to sets of values.

enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;
