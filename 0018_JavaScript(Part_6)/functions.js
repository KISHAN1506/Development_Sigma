function hello() {
    console.log("Hello World !");
}

// hello();
// hello();
// hello();
// hello();
// hello();

function Poem(){
    console.log("This is a poem");
    console.log("This is a good");
    console.log("This is a nice");
}

// Poem();

function diceRoll(){
    let num = Math.floor(Math.random() * 6) + 1;
    console.log(num+" is generated");
    
}

diceRoll();
diceRoll();
diceRoll();
diceRoll();
diceRoll();

function sum(a,b){
    console.log(a+b);
}

sum(2,3);
sum(23,3);
sum(2,23);

// will print NaN
sum(2);
sum(2,3,22);

function avrg(a,b,c){
    console.log((a+b+c)/3);   
}

avrg(11,22,34);

console.log(avrg);


function mulTable(n) { 
    for(let i = 1;i<=10; i++){
        console.log(`${n} X ${i} = ${n*i}`);   
    }
}

mulTable(12);