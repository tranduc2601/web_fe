// Load tasks from localStorage or initialize empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Render tasks when page loads
window.onload = function() {
    renderTasks();
};

// Add new task
function addTask() {
    let input = document.getElementById('taskInput');
    let taskText = input.value.trim();
    
    if (taskText === '') {
        alert('Vui lòng nhập công việc!');
        return;
    }
    
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    input.value = '';
    renderTasks();
}

// Render all tasks
function renderTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        let li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <div>
                <button onclick="editTask(${index})">Sửa</button>
                <button onclick="deleteTask(${index})">Xóa</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// Delete task
function deleteTask(index) {
    if (confirm('Bạn có chắc chắn muốn xóa công việc này không?')) {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }
}

// Edit task
function editTask(index) {
    let newTask = prompt('Chỉnh sửa công việc:', tasks[index]);
    if (newTask !== null && newTask.trim() !== '') {
        tasks[index] = newTask.trim();
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }
}