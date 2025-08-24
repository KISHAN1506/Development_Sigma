class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`Hi! I am ${this.name}`);
    }
}

class Student extends Person {
    constructor(name,age,marks){
        super(name,age); // parent class constructor is called here 
        this.marks = marks;
    }
};

let st1 = new Student("Kishan",29,98);

class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age); // parent class constructor is called here 
        this.subject = subject;
    }
};

let teacher1 = new Teacher("Kishan",29,"Mathematics");
