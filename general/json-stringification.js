// JSON stringification is the process of converting a JavaScript object into a JSON string. This is done using the JSON.stringify() method. This is useful when you want to send data to a server or store it in a file.

const person = {
  name: 'John Doe',
  age: 30,
  email: "example@mail.com"
};
const personJSON = JSON.stringify(person);
console.log(personJSON); // {"name":"John Doe","age":30,"email": "example@mail.com"



