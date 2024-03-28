// object links refers to a variable or value that points to an object place in memmory and not the object itself. When you change the value of the object link, you are changing the value of the object in memory.

const obj1 = { name: 'John' };
const obj2 = obj1;

abj2.name = 'Jane';
console.log(obj1.name) // Jane
