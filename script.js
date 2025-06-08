let buttons = document.querySelectorAll("button");
let input = document.getElementById("display");
let str = "";
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    input.value = e.target.innerHTML;
    if (input.value === "AC") {
      str = "";
    } else if (input.value === "=") {
      str = eval(str);
    } else if (input.value === "DEL") {
      str = str.substring(0, str.length - 1);
    } else {
      str += input.value;
    }
    input.value = str;
  });
});
