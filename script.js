// 1. Select the <h1> by id and change its text
const heading = document.getElementById("main-heading");
heading.textContent = "Welcome to the DOM World!";

// 2. Select all <p> elements and set their text color to blue
const paragraphs = document.getElementsByTagName("p");
for (let p of paragraphs) {
    p.style.color = "blue";
}

// 3. Use querySelector to select the first .container div and change its background color
const containerDiv = document.querySelector(".container");
containerDiv.style.backgroundColor = "yellow"; 