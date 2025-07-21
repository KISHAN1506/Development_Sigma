// this keyword refers to the object which is executing the peice of code

const student = {
    name: "Kishan",
    dsa: 98,
    dsd: 99,
    complex: 97,
    getAvg() {
        console.log(this);
        let avg = (this.dsa + this.dsd + this.complex) / 3;
        console.log(avg);
    }
}

console.log(student.getAvg());


// if no object is defined and object is called using this 
// then window object is used a primary

function getAvg() {
    console.log(this);
}
console.log();
getAvg();
// getAvg(); ----> window.getAvg();