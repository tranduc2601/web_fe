//danh sasch
const boxes = document.querySelectorAll(".box");
// click event cho các ô màu
boxes.forEach(box => {
  box.addEventListener("click", function () {
    const color = window.getComputedStyle(box).backgroundColor;
    document.getElementById("mainBody").style.backgroundColor = color;
  });
});
