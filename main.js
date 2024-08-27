const btn = document.querySelectorAll(".btn");
const food = document.querySelectorAll(".food-item");

function removeActive() {
  btn.forEach((even) => {
    even.classList.remove("active");
  });
}

function filter(clickedButton) {
  food.forEach((even) => {
    if (
      even.getAttribute("type-food") ===
        clickedButton.getAttribute("type-food") ||
      clickedButton.getAttribute("type-food") === "all"
    ) {
      even.classList.remove("hide");
    } else {
      even.classList.add("hide");
    }
  });
}

btn.forEach((item) => {
  item.addEventListener("click", () => {
    removeActive();
    item.classList.add("active");
    filter(item);
  });
});
