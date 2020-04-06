var button = document.getElementById("button");
var input = document.getElementById("input-value");
var child_list = document.querySelector(".order");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var textNode = document.createTextNode(input.value);
  li.appendChild(textNode);
  child_list.appendChild(li);
  input.value = "";
}
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (input.value.length > 0 && event.keyCode == 13) {
    createListElement();
  }
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
