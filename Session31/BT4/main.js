const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");
const overlay = document.getElementById("modalOverlay");

openBtn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
});
