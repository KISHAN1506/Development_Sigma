// innerText --> shows us the visible text content contained in a node
// document.querySelector("p").innerText
// 'Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books. He has been featured in comic books, television shows, films, video games, novels, and plays'


// innerHTML --> shows the full markup //shows us text with all applied HTML
// document.querySelector("p").innerHTML
// '\n      <b>Spider-Man</b> is a superhero appearing in American comic books\n      published by\n      <a href="https://www.google.com/search?q=Marvel+Comics">Marvel Comics</a>.\n      Created by writer-editor <b>Stan Lee</b> and artist <b>Steve Ditko</b>, he\n      first appeared in the anthology comic book\n      <a href="https://www.google.com/search?q=Amazing+Fantasy">Amazing Fantasy</a>\n      #15 (August 1962) in the <a href="#">Silver Age of Comic Books</a>. He has\n      been featured in comic books, television shows, films, video games,\n      novels, and plays\n    '


// textContent --> shows the full content / text.
// document.querySelector("p").textContent
// '\n      Spider-Man is a superhero appearing in American comic books\n      published by\n      Marvel Comics.\n      Created by writer-editor Stan Lee and artist Steve Ditko, he\n      first appeared in the anthology comic book\n      Amazing Fantasy\n      #15 (August 1962) in the Silver Age of Comic Books. He has\n      been featured in comic books, television shows, films, video games,\n      novels, and plays\n    '


// Difference  betweeen innerText and textContent :

// innerText --> extract and show the text which are available at our webpage
// textContent --> extract and show the text which are available at our html file directly


// document.querySelector("p").innerHTML = "Hello <b>World</b>";
// 'Hello <b>World</b>'
// let heading = document.querySelector("h1");
// undefined
// heading.innerHTML = `<u>${heading.innerHTML}</u>`;
// '<u>Spider Man</u>'
