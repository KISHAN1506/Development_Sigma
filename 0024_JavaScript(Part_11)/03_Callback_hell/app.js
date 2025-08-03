let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}

changeColor("red", 1000, () => {
    changeColor("maroon", 1000, () => {
        changeColor("green", 1000);
    });
});

// callback nesting -> does not looks good and code is not much readable ->
// therefore this is called callback hell