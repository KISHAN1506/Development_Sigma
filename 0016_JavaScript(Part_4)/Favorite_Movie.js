let fav_mov = "Avatar";
let guess = prompt("Enter your guess :");


while(fav_mov != guess) {
    let guess = prompt("Enter your guess :");
    if(fav_mov == guess){
        console.log("Lets Go , perfect Guess");
        break;
    }
    if(guess === "quit"){
        console.log("No problem");
        break;
    }
}