window.onload = function () {
  createBtns();
  findMiddleBtn();
  findAllBtns();
  handleClick();
};


function createBtns() {
  const container = document.createElement("div");
  container.setAttribute("id", "btns");

  for (let i = 1; i < 10; i++) {
    const button = document.createElement("button");
    button.setAttribute("id", `btn${i}`);
    button.innerText = i;
    container.appendChild(button);
  }
  document.body.appendChild(container);
}

function findMiddleBtn() {
  const btns = document.getElementById("btns");
  const btn = btns.children[4];
  return btn;
}

function findAllBtns() {
  const otherBtns = document.querySelectorAll("#btns > button:not(#btn5)");
  return otherBtns;
}

function handleClick() {
  const values = ["1", "4", "7", "8", "9", "6", "3", "2"];
  const btn = findMiddleBtn();
  btn.addEventListener("click", () => {
    const otherBtns = findAllBtns();
    for (const btn of otherBtns) {
      let index = values.indexOf(btn.innerText);
      if (index < values.length - 1) index++;
      else index = 0;
      btn.innerText = values[index];
    }
  });
}
