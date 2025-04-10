let courses = JSON.parse(localStorage.getItem("courses")) || [];

function saveCourses() {
  localStorage.setItem("courses", JSON.stringify(courses));
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  courses.forEach((task, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${task.content}</td>
      <td>${task.dueDate}</td>
      <td>${task.status}</td>
      <td>${task.assignedTo}</td>
      <td>
        <button onclick="editTask(${task.id})">Sửa</button>
        <button onclick="deleteTask(${task.id})">Xóa</button>
      </td>
    `;
    taskList.appendChild(row);
  });
}

function addOrUpdateTask(e) {
  e.preventDefault();
  const content = document.getElementById("content").value;
  const dueDate = document.getElementById("dueDate").value;
  const status = document.getElementById("status").value;
  const assignedTo = document.getElementById("assignedTo").value;

  if (!content || !dueDate || !status || !assignedTo) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  const editId = document.getElementById("taskForm").dataset.editId;
  if (editId) {
    const index = courses.findIndex(t => t.id == editId);
    courses[index] = { id: parseInt(editId), content, dueDate, status, assignedTo };
    delete document.getElementById("taskForm").dataset.editId;
  } else {
    const newTask = {
      id: Date.now(),
      content,
      dueDate,
      status,
      assignedTo
    };
    courses.push(newTask);
  }

  saveCourses();
  renderTasks();
  e.target.reset();
}

function deleteTask(id) {
  if (confirm("Bạn có chắc muốn xóa?")) {
    courses = courses.filter(task => task.id !== id);
    saveCourses();
    renderTasks();
  }
}

function editTask(id) {
  const task = courses.find(t => t.id === id);
  document.getElementById("content").value = task.content;
  document.getElementById("dueDate").value = task.dueDate;
  document.getElementById("status").value = task.status;
  document.getElementById("assignedTo").value = task.assignedTo;
  document.getElementById("taskForm").dataset.editId = id;
}

document.getElementById("taskForm").addEventListener("submit", addOrUpdateTask);
renderTasks();
