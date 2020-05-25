let textInput = document.getElementById("text-input");
let btnInput = document.getElementById("button-add");
let container = document.getElementById("list-card");
let idx = 1;
let start = caller();
btnInput.addEventListener("click", start.printOnContainer);

function caller() {
  return {
    printOnContainer() {
      let r = confirm("Deseja adicionar esse card? ");
      if (r) {
        let newElement = document.createElement("div");
        newElement.setAttribute("class", `card-course`);
        let textElement = document.createTextNode(textInput.value);
        newElement.appendChild(textElement);
        container.appendChild(newElement);
        idx = idx + 1;
      }
      console.log("its alive" + idx);
    },
  };
}
