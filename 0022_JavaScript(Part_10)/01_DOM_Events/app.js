let btn = document.querySelector("button");


// only one onclick works ie last one
// btn.onclick = function () {
//     alert("Clicked");
// }
// btn.onclick = function () {
//     alert("Second one");
// }

// so we use event listener
btn.addEventListener("click",function(){
    alert("Hello");
});
btn.addEventListener("click",function(){
    alert("Hello SECOND TIME");
});



btn.onmouseenter = function () {
    console.log("Mouse entered");
}