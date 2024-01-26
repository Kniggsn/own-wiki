const btn = document.querySelector("button");
const inputElement = document.querySelector("input");
const listElement = document.querySelector("ul");


btn.addEventListener("click", addListItem);
inputElement.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addListItem();
    }
});

function addListItem() {

    if (inputElement.value === "") {
        return;
    }

    const inputValue = inputElement.value;
    inputElement.value = "";

    const newListElement = document.createElement("li");
    const newSpanElement = document.createElement("span");
    const newButtonElement = document.createElement("button");

    newListElement.appendChild(newSpanElement);
    newListElement.appendChild(newButtonElement);

    newSpanElement.textContent = inputValue;
    newButtonElement.textContent = "delete";

    newButtonElement.addEventListener("click", () => listElement.removeChild(newListElement));

    listElement.appendChild(newListElement);
    
}
