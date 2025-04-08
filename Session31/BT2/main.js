const body = document.getElementById("page");
const button = document.getElementById("toggleBtn");
//defult color
body.style.backgroundColor = "white";
body.style.color = "black";
//click event
button.addEventListener("click", function () {
  if (body.style.backgroundColor === "white") {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
});
