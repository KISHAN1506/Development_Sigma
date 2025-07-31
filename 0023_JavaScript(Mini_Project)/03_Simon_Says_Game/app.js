let gameSeq = [];
let userSeq = [];
let btn = ["yellow","red","purple","green"];
let score = [];

let started = false;
let level = 0;


let lev = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        lev.innerHTML = "Level " + level;
        started = true;
    }

    levelUp();
})

function gameFlash(btn) {
    btn.classList.add("flash");
    
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp() {
    userSeq = [];
    level++;
    lev.innerHTML = `Level ${level}`;

    let randInd = Math.floor(Math.random() * 4) ;
    let randColor = btn[randInd];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor)

    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("Current level : ",level);

    // let idx = level - 1;
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else {
        score.push(level);
        let highest = 0;
        for(lvl of score) {
            if(lvl > highest) {
                highest = lvl;
            }
        }
        lev.innerHTML = `Game over! Your Score was <b>${level}</b> <br>Your highest Score was ${highest} <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
    
}

function btnPress(){
    let selectedBtn = this;
    userFlash(selectedBtn)

    userColor = selectedBtn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btns of allBtns) {
    btns.addEventListener("click",btnPress)
}

function reset (){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}