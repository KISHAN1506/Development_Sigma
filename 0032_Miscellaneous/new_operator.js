const { log } = require("console");

function Person(name, age){
    this.name = name;
    this.age = age;
    console.log(this);
}

Person.prototype.talk = function () {
    console.log(`Hi my name is ${this.name}`);
}

let p1 = new Person("Kishan",19);
let p2 = new Person("Aryan",23);

p1.talk === p2.talk; // --> this will give true as both are properties of the prototype 