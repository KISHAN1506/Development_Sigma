let btn = document.querySelector("button");
btn.addEventListener('click', function () {
    let h3 = document.querySelector("h3");
    let randomColor =  getRandomColor();
    h3.innerHTML = randomColor;

    let box = document.querySelector("div");
    box.style.backgroundColor = randomColor;
});

function getRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let color = `rgb(${r}, ${g}, ${b})`
    return color;
}