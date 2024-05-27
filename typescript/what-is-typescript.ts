// TypeScript is a statically typed language that builds on JavaScript by adding optional type annotations. It compiles down to plain JavaScript, which means it can run on any environment that JavaScript can, such as browsers and Node.js. TypeScript's main features include:

// Static Typing: Allows developers to define types for variables, function parameters, and return values.
// Type Inference: Automatically infers types when they are not explicitly provided.
// Modern JavaScript Features: Supports ES6/ES7 features like classes, modules, and async/await.

// THere are many compiler options that can be used to configure the TypeScript compiler. Some of the most common options include:

// --target: Specifies the ECMAScript target version for the compiled JavaScript code.

// {
//   "compilerOptions": {
//     "target": "ES5"
//   }
// }

// --module: Specifies the module system used in the compiled JavaScript code.

// --outDir: Specifies the output directory for the compiled JavaScript files.

// Declaration files (.d.ts) are used to describe the shape of existing JavaScript code, allowing TypeScript to understand the types and structures of libraries and modules that do not have TypeScript typings.

// You can create a declaration file manually or generate it using the TypeScript compiler. Here’s an example of a simple declaration file:

// myLibrary.d.ts
declare module "myLibrary" {
  export function greet(name: string): string;
}
