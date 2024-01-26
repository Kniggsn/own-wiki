const container = document.querySelector("#dom-methods-list"); // selects the container with the ID "javascript-test"
const lastListElement = container.lastElementChild; //lastChild gibt auch Text zurück

lastListElement.textContent = "This text has been changed by js";

const content = document.createElement("li");
content.textContent = "This text has been added by js";
container.appendChild(content);
let content2 = document.createElement("li");
content2.textContent = "This is another Element added by js";
container.appendChild(content2);

const redParagraph = document.createElement("p");
redParagraph.textContent = "This is a p Element with red text";
redParagraph.style.color = "red";

container.appendChild(redParagraph);

const blueHeadline = document.createElement("h3");
blueHeadline.textContent = "I'm a blue H3!";
blueHeadline.style.color = "blue";

container.appendChild(blueHeadline);

const filledDivElement = document.createElement("div");
filledDivElement.style.borderWidth = "12p";
filledDivElement.style.backgroundColor = "pink";
const headline = document.createElement("h1");
const paragraph = document.createElement("p");
headline.textContent = "I'm in a div!"
paragraph.textContent = "Me too!"
filledDivElement.appendChild(headline);
filledDivElement.appendChild(paragraph);

container.appendChild(filledDivElement);

//const btn = document.querySelector("#btn");
//btn.onclick = () => alert("Hello world!");

const btn2 = document.querySelector("#btn2");
//btn2.addEventListener("click", () => {
//   alert("Hello World");
//});
btn2.addEventListener("click", function(e) {
    e.target.style.backgroundColor = "blue";
});

//const btn3 = document.querySelector("#btn3");
//btn3.addEventListener("click", alertSomething);

const buttons = document.querySelectorAll("button")

buttons.forEach(button => {
    button.addEventListener("click", () => alertSomething("Hallo"));
})

function alertSomething(message) {
    alert(message);
}

const testline = document.querySelector("#testline");
testline.addEventListener("dblclick", () => alert("Du hast gedoppelklickt!"))
