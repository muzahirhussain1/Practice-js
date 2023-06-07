/////////  ENCAPSULATION  ///////////////

// ecapsulation is method by which we the values of variables by getter and setter ////

// class person {
//   constructor() {
//     var place;
//     var age;
//   }
//   getPlace() {
//     return this.place;
//   }
//   setPlace(place) {
//     this.place = place;
//   }
//   getAge() {
//     return this.age;
//   }
//   setAge(age) {
//     this.age = age;
//   }
// }

// var identity = new person();
// identity.setPlace("hunza");
// identity.setAge(55);
// document.write(identity.getPlace() + "<br>");
// document.write(identity.getAge() + "<br>");

////  encapsulation     ////

// class animal {
//   constructor() {
//     var goodname;
//     var ageyear;
//   }
//   getname() {
//     return this.goodname;
//   }
//   setname(goodname) {
//     this.goodname = goodname;
//   }
//   getage() {
//     return this.ageyear;
//   }
//   setage(ageyear) {
//     this.ageyear = ageyear;
//   }
// }
// var identifier = new animal();
// identifier.setname("lion");
// identifier.setage(34);
// document.write(identifier.getname() + "<br>");
// document.write(identifier.getage());
// class human {
//   constructor() {
//     var goodname;
//     var yearage;
//   }
//   getname() {
//     return this.goodname;
//   }
//   setname(goodname) {
//     this.goodname = goodname;
//   }
//   getage() {
//     return this.yearage;
//   }
//   setage(yearage) {
//     this.yearage = yearage;
//   }
// }
// var identity = new human();
// identity.setname("muzahir");
// identity.setage(23);
// document.write(identity.getname() + "<br>");
// document.write(identity.getage());

// var fname = "muzahir";
// var lname = "hussain";
// function fullname(a, x) {
//   return `hello ${fname} ${lname} `;
// }
// console.log(fullname());

// let hello = function () {
//   return "hello pakistan";
// };
// document.write(hello());

/////  arrow function  ////

// let hello = (fname, lname) => {
//   console.log(`hello the man ${fname} ${lname}`);
// };
// hello("muzahir", "khan");

////   rest operators /////

// function sum(names, ...agrs) {
//   let sum = 0;
//   document.write(`${names} `);
//   for (let i in agrs) {
//     sum += agrs[i];
//   }
//   document.write(sum + "<br>");
// }
// sum("yahoo", 2, 3, 4, 5);
// sum("khan", 2, 3, 9, 4);

// Write your code below
// let bobsFollowers = ["Joe", "Marta", "Sam", "Erin"];
// let tinasFollowers = ["Sam", "Marta", "Elle"];
// let mutualFollowers = [];

// for (let i = 0; i < bobsFollowers.length; i++) {
//   for (let j = 0; j < tinasFollowers.length; j++) {
//     if (bobsFollowers[i] === tinasFollowers[j]) {
//       mutualFollowers.push(bobsFollowers[i]);
//       console.log(mutualFollowers);
//     }
//   }
// }

// let counterTwo = 0;
// while (counterTwo < 4) {
//   console.log(counterTwo);
//   counterTwo++;
// }

// let countString = "";
// let i = 0;

// do {
//   countString = countString + i;
//   i++;
// } while (i < 5);

// console.log(countString);

// const firstMessage = "I will print!";
// const secondMessage = "I will not print!";

// // A do while with a stopping condition that evaluates to false
// do {
//   console.log(firstMessage);
// } while (true === false);

// // A while loop with a stopping condition that evaluates to false
// while (true === false) {
//   console.log(secondMessage);
// }

// function hello() {
//   console.log("efeefdjfdf");
// }
// hello();

// function multiplyByNineFifths(number) {
//   return number * (9 / 5);
// }

// function getFahrenheit(celsius) {
//   return multiplyByNineFifths(celsius) + 32;
// }

// console.log(getFahrenheit(15));
// const hello = ["Hello World", "sjdhsjsdhj", "sjdhjs", "sdssjs", "sjdhsjds"];
// console.log(hello[2]);

// class person {
//   constructor(lname, rollnum) {
//     this.lname = lname;
//     this.rollnum = rollnum;
//   }
// }
// const person1 = new person("ahmed", "900");
// const person2 = new person("khan", "76");
// const person3 = new person("bilal", "100");
// const person4 = new person("javed", "200");

// console.log(person2.rollnum);
// console.log(person3.lname);

// class Dog {
//   constructor(name) {
//     this._name = name;
//     this._behavior = 0;
//   }

//   get name() {
//     return this._name;
//   }
//   get behavior() {
//     return this._behavior;
//   }

//   incrementBehavior() {
//     this._behavior++;
//   }
// }

// const halley = new Dog("Halley");
// console.log(halley.name);
// console.log(halley.behavior);
// halley.incrementBehavior();
// console.log(halley.behavior);

/////////extend and super ////////////

// class person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// class student extends person {
//   constructor(name, age, gpa) {
//     super(name, age);
//     this.gpa = gpa;
//   }
// }
// class teacher extends person {
//   constructor(name, age, classsize) {
//     super(name, age);
//     this.classsize = classsize;
//   }
// }
// let std = new student("ahmed", 22, 4);
// let thr = new teacher("khan", 30, 70);
// console.log(`the student have ${std.gpa} gpa`);
// console.log(std.name);
// console.log(std.age);

// function prom(comp) {
//   return new Promise((resolve, reject) => {
//     if (comp) {
//       resolve("the progrm success");
//     } else {
//       reject("program failed");
//     }
//   });
// }
// let fullfillment = (result) => {
//   console.log(result);
// };
// let rejected = (error) => {
//   console.log(error);
// };
// prom(true).then(fullfillment);
// prom(true).catch(rejected);

// setTimeout(function () {
//   myFunction("I love You !!!");
// }, 3000);

// function myFunction(value) {
//   document.getElementById("demo").innerHTML = value;
// }

/////   promise    ////////////

// let myprom = new Promise((resolve, reject) => {
//   let a = 5;
//   let b = 4;
//   let c = a + b;
//   if (c === 10) {
//     resolve(`sum of a and b is ${c}`);
//   } else {
//     reject("wrong ans");
//   }
// });
// myprom
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// //////  Nested loops  ///////////

// var symbol = window.prompt("Enter a symbols");
// var rows = window.prompt("enter a no of rows");
// var columns = window.prompt("enter a num of columns");

// for (let i = 0; i < rows; i++) {
//   for (let j = 0; j < columns; j++) {
//     document.querySelector("#rect").innerHTML += symbol;
//   }
//   document.querySelector("#rect").innerHTML += "<br>";
// }

class cycle {
  constructor(name, model, velocity) {
    this.name = name;
    this.model = model;
    this.velocity = velocity;
  }
  applypaddles() {}
  apply_breaks() {}
  check_speed() {}
}

const honda = new cycle("toyota", 2000, 100);
const ferari = new cycle("ferari", 2010, 200);

console.log(honda.name);
console.log(ferari);
