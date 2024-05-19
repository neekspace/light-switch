let background = document.querySelector("body"),
    button = document.querySelector("div.switch");

button.addEventListener("click", function () {
  if (background.className === "") {
    background.classList.add("night");
  } else {
    background.classList.remove("night");
  }
});
