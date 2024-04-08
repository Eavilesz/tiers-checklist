// Promises in JavaScript provide a way to handle asynchronous operations more effectively, making code easier to read and maintain. They represent the eventual completion (or failure) of an asynchronous operation and allow you to attach callbacks to handle the success or failure of that operation.

// Example:

const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    // Fulfill the promise
    resolve('Success!');
    // Or reject the promise
    // reject('Error!');
  }, 2000);
});

myPromise.then((result) => {
  console.log('Promise resolved:', result);
}).catch((error) => {
  console.error('Promise rejected:', error);
});

  // In this example, a new promise is created using the Promise constructor. The executor function passed to the constructor contains asynchronous code that resolves or rejects the promise after a certain time delay. The .then() and .catch() methods are used to handle the fulfillment or rejection of the promise. If the promise is resolved, the success callback is executed; if it is rejected, the error callback is executed.
