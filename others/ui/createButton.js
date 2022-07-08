const button = document.createElement("button");
button.setAttribute("id", "btn");

button.style.width = "96px";
button.style.height = "48px";
button.style.fontSize = "24px";

let counter = 0;
button.innerText = counter;
button.addEventListener("click", () => {
  counter++;
  button.innerText = counter;
});

document.body.appendChild(button);

