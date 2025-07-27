// let h4 = document.querySelector('h4');
// undefined

// h4.parentElement
// < div class="box" >...</div >

// h4.children
// HTMLCollection[]

// let box = document.querySelector('.box');
// undefined

// box.children;
// HTMLCollection(2)[h4, ul]

// box.childElementCount;
// 2

// let ul = document.querySelector('ul');
// undefined

// ul.parentElement
// < div class="box" >...</div >

// ul.childElementCount;
// 3

// ul.children;
// HTMLCollection(3)[li, li, li]

// let image = document.querySelector("img");
// undefined
// image.previousElementSibling.style.color = "green";
// 'green'

// appendChild(element)
// append(element)
// prepend(element)
// insertAdjacentElemnt(where, element)


// To create and append a new Paragraph:
// let newPara = document.createElement('p');
// undefined
// newPara.innerHTML = "Hi I am a new Paragraph!"
// 'Hi I am a new Paragraph!'
// let boxSelect = document.querySelector(".box");
// undefined
// boxSelect.append(newPara);
// undefined





// Here we see that copies are not formed
// Instead the paragraph changes its location if reassigned
// let newPara = document.createElement('p');
// undefined
// newPara.innerHTML = "Hi I am a new Paragraph!"
// 'Hi I am a new Paragraph!'
// let boxSelect = document.querySelector(".box");
// undefined
// boxSelect.append(newPara);
// undefined
// document.querySelector("body").append(newPara);
// undefined
// document.querySelector(".box").append(newPara);
// undefined




// using appendChild new child can be added
// while using append function help us to add data in content of element at last
// 4 properties --> beforebegin, afterbegin, beforeend, afterend


// body.removeChild(btn);
// btn.remove();