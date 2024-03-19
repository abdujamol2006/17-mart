alert("1-masala");
(function () {
  console.log("1-masala");
})();
class Person1 {
  constructor(name, age, qualification) {
    (this.name = name), (this.age = age), (this.qualification = qualification);
  }
  getInfo() {
    console.log(this.name, this.age, this.qualification);
  }
}
let user1 = new Person1("Abdujamol", "18", "high");
console.log(user1);

class Person2 extends Person1 {
  constructor(name, age, qualification) {
    super(name, age, qualification);
  }
  getInfo() {
    console.log(this.name, this.age, this.qualification);
  }
}
let user2 = new Person2("Nizomiddin", "16", "middle");
console.log(user2);
//2
alert("2-masala");
(function () {
  console.log("2-masala");
})();

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  yuza() {
    return this.length * this.width;
  }

  per() {
    return 2 * (this.length + this.width);
  }
  getInfo() {}
}

const tortburchak = new Rectangle(15, 10);

const area = tortburchak.yuza();

const perimeter = tortburchak.per();

console.log(area);
console.log(perimeter);
alert("3-masala");
(function () {
  console.log("3-masala");
})();
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    console.log(this.year), this.make, this.model;
  }
}

class Avtomobil extends Vehicle {
  constructor(make, model, year, doorCount) {
    super(make, model, year);
    this.doorCount = doorCount;
  }

  displayInfo() {
    console.log(this.year, this.make, this.model);
  }
}

const avto = new Avtomobil("Toyota", "Camry", 2022, 4);
avto.displayInfo();

alert("5-masala");
(function () {
  console.log("5-masala");
})();
class Shakl {
  yuzanihisob() {
    console.log("Bu shakl maydoni hisoblash usuli bekor qilingan.");
  }
}

class circle extends Shakl {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  yuzanihisob() {
    const area = Math.PI * this.radius ** 2;
    console.log(area);
  }
}

class uchburchak extends Shakl {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  yuzanihisob() {
    const area = 0.5 * this.base * this.height;
    console.log(area);
  }
}

const circles = new circle(5);
circles.yuzanihisob();

const uchburchaks = new uchburchak(4, 3);
uchburchaks.yuzanihisob();
alert("6-masala");
(function () {
  console.log("6-masala");
})();
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  annualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, bonus) {
    super(name, salary);
    this.bonus = bonus;
  }

  annualSalary() {
    return (this.salary + this.bonus) * 12;
  }
}

const manager1 = new Manager("John Doe", 50000, 10000);
const manager2 = new Manager("Jane Smith", 60000, 12000);

console.log(manager1.name, manager1.annualSalary());
console.log(manager2.name, manager2.annualSalary());
alert("7-masala");
(function () {
  console.log("7-masala");
})();
class Book {
  constructor(title, muallif, year) {
    this.title = title;
    this.muallif = muallif;
    this.year = year;
  }

  displayInfo() {
    console.log(this.title - this.muallif, this.year);
  }
}

class Ebook extends Book {
  constructor(title, muallif, year, price) {
    super(title, muallif, year);
    this.price = price;
  }

  displayInfo() {
    console.log(this.title, "-", this.muallif, this.year, this.price);
  }
}

const ebook = new Ebook(
  "JavaScript: The Good Parts",
  "Douglas Crockford",
  2008,
  25
);
ebook.displayInfo();
alert("8-masala");
(function () {
  console.log("8-masala");
})();

class Animal {
  constructor(type, sound) {
    this.type = type;
    this.sound = sound;
  }

  makeSound() {
    console.log(this.type, this.sound);
  }
}

class Dog extends Animal {
  constructor(type, sound, color) {
    super(type, sound);
    this.color = color;
  }

  makeSound() {
    console.log("Rangi:", this.color, ".", "Ovozi:", this.sound);
  }
}

const dog = new Dog("It", "Grrr", "Qora");
dog.makeSound();

// Product class
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  calculateTotalPrice(quantity) {
    return this.price * quantity;
  }
}

class shaxsiymax extends Product {
  constructor(id, name, price, yaroqlilik) {
    super(id, name, price);
    this.yaroqlilik = yaroqlilik;
  }

  hisoblash(qiymat) {}

  displayInfo() {
    console.log(this.name, "-", "Kafolat muddati:", this.yaroqlilik, "oy");
  }
}

const shampoo = new shaxsiymax(1, "Shampun", 10, 12);
console.log(shampoo.hisoblash(3));
shampoo.displayInfo();
