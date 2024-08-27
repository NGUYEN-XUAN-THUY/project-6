const btn = document.querySelectorAll(".btn");
function removeActive() {
  btn.forEach((even) => {
    even.classList.remove("active");
  });
}
btn.forEach((item) => {
  item.addEventListener("click", () => {
    removeActive();
    item.classList.add("active");
  });
});
