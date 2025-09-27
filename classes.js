class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
}

const person1 = new Person("Ayodeji", 21);
console.log(person1.greet());
