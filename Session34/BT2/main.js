let courses = JSON.parse(localStorage.getItem("tasks")) || [
  {
    id: 1,
    content: 'Learn Javascript Session 01',
    dueDate: '2023-04-17',
    status: 'Pending',
    assignedTo: 'Anh Bách'
  },
  {
    id: 2,
    content: 'Learn Javascript Session 2',
    dueDate: '2023-04-17',
    status: 'Pending',
    assignedTo: 'Lâm'
  },
  {
    id: 3,
    content: 'Learn CSS Session 1',
    dueDate: '2023-04-17',
    status: 'Pending',
    assignedTo: 'Hiếu Cì ớt ớt'
  }
];

let editingId = null;

function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  courses.forEach((task, index) => {
    taskList.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${task.content}</td>
        <td>${task.dueDate}</td>
        <td>${task.status}</td>
        <td>${task.assignedTo}</td>
        <td>
          <button class="action-btn edit-btn" onclick="editTask(${task.id})">Sửa</button>
          <button class="action-btn delete-btn" onclick="deleteTask(${task.id})">Xóa</button>
        </td>
      </tr>
    `;
  });
  localStorage.setItem("tasks", JSON.stringify(courses));
}

document.getElementById("task-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const content = document.getElementById("content").value.trim();
  const dueDate = document.getElementById("dueDate").value;
  const status = document.getElementById("status").value;
  const assignedTo = document.getElementById("assignedTo").value.trim();

  if (!content || !dueDate || !status || !assignedTo) {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  if (editingId !== null) {
    const index = courses.findIndex(t => t.id === editingId);
    courses[index] = { id: editingId, content, dueDate, status, assignedTo };
    editingId = null;
  } else {
    const newTask = {
      id: Date.now(),
      content,
      dueDate,
      status,
      assignedTo,
    };
    courses.push(newTask);
  }

  this.reset();
  renderTasks();
});

function editTask(id) {
  const task = courses.find(t => t.id === id);
  document.getElementById("content").value = task.content;
  document.getElementById("dueDate").value = task.dueDate;
  document.getElementById("status").value = task.status;
  document.getElementById("assignedTo").value = task.assignedTo;
  editingId = id;
}

function deleteTask(id) {
  if (confirm("Bạn có chắc chắn muốn xóa công việc này không?")) {
    courses = courses.filter(task => task.id !== id);
    renderTasks();
  }
}

window.onload = renderTasks;
