let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let item = document.querySelector("li");
let delBtn = document.querySelector(".delete");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerHTML = input.value;

    let del = document.createElement("button")
    del.innerHTML = "Delete Task";
    del.classList.add("delete");

    if(item.innerText != "") {
        ul.appendChild(item);
        item.appendChild(del);
    }



    input.value = "";
})

// let delBtns = document.querySelectorAll(".delete");

// for (delB of delBtns) {
//     delB.addEventListener("click", function () {
//         // "this" is very important here
//         let parent = this.parentElement;
//         parent.remove();
//     })
// }


// To apply deletion property on new created element apply event listeners
// on li's any of parent element

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let liItem = event.target.parentElement;
        liItem.remove();
    }

})