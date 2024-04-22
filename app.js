let input = document.getElementById("input");
let text = document.querySelector(`.text`);
let button = document.getElementById("add");
button.addEventListener("click", () => {
  if (input.value == "") {
    alert("Please enter a task");
  } else {
    let newEle = document.createElement("ul");
    newEle.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
    text.append(newEle);
    input.value = "";
    newEle.querySelector("i").addEventListener("click", remove);
    function remove() {
      newEle.remove();
    }
  }
});
