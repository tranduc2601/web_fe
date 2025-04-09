const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${task}</span>
    <button class="deleteBtn">X</button>
  `;

  //xoaxoa
  li.querySelector(".deleteBtn").addEventListener("click", () => {
    const confirmDelete = confirm("Bạn có chắc muốn xóa nhiệm vụ này?");
    if (confirmDelete) {
      taskList.removeChild(li);
    }
  });

  taskList.appendChild(li);
  input.value = "";
});
