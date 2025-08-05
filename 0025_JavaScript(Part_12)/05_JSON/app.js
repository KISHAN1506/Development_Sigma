// JSON --> JavaScript Object Notation

// Accessing JSON Data:

let JsonData = '{"Name": "Kishan","age":12}'

console.log(JsonData);


let ParsedData = JSON.parse(JsonData);
console.log(ParsedData);
console.log(ParsedData.Name);

let info = {
    name: "Kishan",
    age: 19
};

let newData = JSON.stringify(info);
console.log(newData);
