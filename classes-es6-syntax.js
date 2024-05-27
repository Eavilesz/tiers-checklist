// To build classes with ES6 syntax, we use the class keyword. Inside the class, we can define a constructor method, which is called when a new object is created from the class. We can also define methods on the class, which are shared by all instances of the class. Here is an example of a class definition in ES6 syntax:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display person's info
  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const john = new Person('John', 30);
john.introduce(); // Output: Hi, my name is John and I am 30 years old.

// you can define getter and setter methods on a class to control access to properties. Here is an example of a class with getter
// and setter methods:

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

// you can also have private fields in a class by prefixing the field name with a hash (#). Here is an example of a class with a private field:

class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}
