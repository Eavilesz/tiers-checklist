// Use === comparison

// The === returns true when both the type and the value are the same for the two variables being compared. This is known as a strict comparison. 
5 === 5 // true
5 === '5' // false

// On the other hand, the == operator does not check the type of the variables and only compares the values. This can lead to unexpected results.
5 == 5 // true
5 == '5' // true

// It's considered a best practice to always use the === operator to avoid unexpected behavior and bugs in your code.

