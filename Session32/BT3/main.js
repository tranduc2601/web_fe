const input = document.getElementById("subjectInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("subjectList");

addBtn.addEventListener("click", () => {
  const subject = input.value.trim();

  if (subject === "") {
    alert("Tên môn học không được để trống!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = subject;
  list.appendChild(li);

  input.value = "";
});
