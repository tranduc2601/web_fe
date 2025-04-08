let todolist = [
    { id: 1, task: 'Hit the gym', completed: false },
    { id: 2, task: 'Pay bills', completed: true },
    { id: 3, task: 'Meet George', completed: false },
    { id: 4, task: 'Buy eggs', completed: false },
    { id: 5, task: 'Read a book', completed: false },
    { id: 6, task: 'Organize office', completed: false }
  ];
  
  const taskList = document.getElementById('taskList');
  const addBtn = document.getElementById('addBtn');
  const newTaskInput = document.getElementById('newTask');
  
  function renderTasks() {
    taskList.innerHTML = '';
    todolist.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task.completed ? `✔ ${task.task}` : task.task; // Add checkmark for completed tasks
      if (task.completed) li.classList.add('completed');
  
      li.addEventListener('click', () => {
        task.completed = !task.completed;
        renderTasks();
      });
  
      const span = document.createElement('span');
      span.textContent = '×';
      span.classList.add('close');
      span.addEventListener('click', (e) => {
        e.stopPropagation(); // tránh click vào li
        todolist = todolist.filter(t => t.id !== task.id);
        renderTasks();
      });
  
      li.appendChild(span);
      taskList.appendChild(li);
    });
  }
  
  addBtn.addEventListener('click', () => {
    const title = newTaskInput.value.trim();
    if (title !== '') {
      const newTask = {
        id: Date.now(),
        task: title,
        completed: false
      };
      todolist.push(newTask);
      newTaskInput.value = '';
      renderTasks();
    }
  });
  
  renderTasks();
