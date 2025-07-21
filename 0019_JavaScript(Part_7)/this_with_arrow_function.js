// arrow function's this refers to the scope of the parent function
// while the normal function refers to the scope of itself

const student = {
    name: "Kishan",
    marks: 95,
    prop: this, //global scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parent's scope - window
        return this.marks;
    },

    // if we want to access outside ie parent 'this' , then we use arrow function
    // to get to correct this pointer of parent
    getInfo1: function () {
        setTimeout(() => {
            console.log(this); //student
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log(this); //window
        }, 2000);
    }
};

console.log(student.getMarks());
console.log(student.getName());



