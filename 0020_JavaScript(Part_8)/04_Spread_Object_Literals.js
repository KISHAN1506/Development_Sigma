const data = {
    email: "kishanagarwal@gmail.com",
    password: "abcd"
};

const dataCopy = { ...data, id: 1234 }

console.log(dataCopy);


let arr = [11, 322, 312, 454];

let obj1 = {
    ...arr
};

console.log(obj1); // place of keys is taken by array index

let str = "Kishan";

let obj2 = {
    ...str
};

console.log(obj2);
