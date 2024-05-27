// Implicit coercion in logical operators (&&, ||, !) is when the operands are coerced to booleans before the operation is performed. This is done because logical operators expect boolean operands. The result of these operators is not always a boolean value. The result can be any value. 
// For example, the && operator returns the value of the first operand if it is falsy, otherwise it returns the value of the second operand. The || operator returns the value of the first operand if it is truthy, otherwise it returns the value of the second operand. The ! operator returns the opposite of the boolean value of the operand.

// && operator code example

console.log(0 && 1); // 0
console.log(1 && 0); // 0
console.log(1 && 2); // 2
console.log(2 && 1); // 1

// || operator code example

console.log(0 || 1); // 1
console.log(1 || 0); // 1
console.log(1 || 2); // 1
console.log(2 || 1); // 2


