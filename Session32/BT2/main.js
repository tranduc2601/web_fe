let count = 0;

const btn = document.getElementById("countBtn");
const counter = document.getElementById("counter");

btn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
