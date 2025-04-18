// main.js

document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Element References ---
  const taskInput = document.getElementById('taskName');
  // Assumes the "Thêm" button is the direct sibling button within .task-input
  const addTaskButton = document.querySelector('.task-input button');
  const pendingTasksContainer = document.getElementById('pendingTasks');
  const inProgressTasksContainer = document.getElementById('inProgressTasks');
  const doneTasksContainer = document.getElementById('doneTasks');
  const board = document.querySelector('.board'); // Container for event delegation

  // --- LocalStorage Key ---
  const TASKS_KEY = 'kanbanBoardTasks'; // Use a descriptive key

  // --- Status Mapping ---
  // Maps status strings to their corresponding container elements
  const statusMap = {
      pending: pendingTasksContainer,
      inprogress: inProgressTasksContainer,
      done: doneTasksContainer
  };
  // Maps status strings to the next status
  const nextStatusMap = {
      pending: 'inprogress',
      inprogress: 'done'
      // 'done' has no next status in this flow
  };

  // --- Functions ---

  // Load tasks from localStorage
  const loadTasks = () => {
      const tasksJson = localStorage.getItem(TASKS_KEY);
      try {
          return tasksJson ? JSON.parse(tasksJson) : [];
      } catch (e) {
          console.error("Error parsing tasks from localStorage:", e);
          return []; // Return empty array on error
      }
  };

  // Save tasks to localStorage
  const saveTasks = (tasks) => {
      localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  };

  // Render tasks onto the board
  const renderTasks = () => {
      const tasks = loadTasks();

      // Clear all task containers first
      Object.values(statusMap).forEach(container => {
          if (container) {
              container.innerHTML = '';
          }
      });

      // Loop through tasks and add them to the correct column
      tasks.forEach(task => {
          const taskElement = document.createElement('div');
          taskElement.classList.add('task');
          taskElement.setAttribute('data-task-id', task.id); // Store ID on the element

          const taskContent = document.createElement('p');
          taskContent.textContent = task.content;
          taskElement.appendChild(taskContent);

          // Add 'move' button only if the task is not 'done'
          if (task.status !== 'done') {
              const moveButton = document.createElement('button');
              moveButton.textContent = 'Chuyển tiếp';
              moveButton.classList.add('move-task-btn'); // Add class for easier selection
              taskElement.appendChild(moveButton);
          }

          // Append the task element to the correct container based on its status
          const targetContainer = statusMap[task.status];
          if (targetContainer) {
              targetContainer.appendChild(taskElement);
          } else {
              console.warn(`Container for status "${task.status}" not found.`);
          }
      });
  };

  // Handle adding a new task
  const handleAddTask = () => {
      const taskContent = taskInput.value.trim();

      if (!taskContent) {
          alert('Vui lòng nhập tên công việc!');
          taskInput.focus();
          return;
      }

      const newTask = {
          id: Date.now(), // Simple unique ID
          content: taskContent,
          status: 'pending' // New tasks always start as pending
      };

      const tasks = loadTasks();
      tasks.push(newTask);
      saveTasks(tasks);
      renderTasks(); // Update the UI

      taskInput.value = ''; // Clear input
      taskInput.focus();
  };

  // Handle moving a task to the next status
  const handleMoveTask = (event) => {
      // Check if the clicked element is the move button
      if (event.target.classList.contains('move-task-btn')) {
          const taskElement = event.target.closest('.task'); // Find the parent task element
          if (!taskElement) return;

          const taskId = Number(taskElement.getAttribute('data-task-id')); // Get the task ID

          const tasks = loadTasks();
          const taskIndex = tasks.findIndex(t => t.id === taskId);

          if (taskIndex > -1) {
              const currentTask = tasks[taskIndex];
              const nextStatus = nextStatusMap[currentTask.status]; // Find the next status

              if (nextStatus) {
                  tasks[taskIndex].status = nextStatus; // Update the task's status
                  saveTasks(tasks); // Save the changes
                  renderTasks(); // Re-render the board
              }
          } else {
              console.error(`Task with ID ${taskId} not found.`);
          }
      }
  };

  // --- Event Listeners ---

  // Add task when the button is clicked
  addTaskButton.addEventListener('click', handleAddTask);

  // Add task when Enter key is pressed in the input field
  taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          event.preventDefault(); // Prevent default form submission if it were in a form
          handleAddTask();
      }
  });

  // Listen for clicks on the entire board for moving tasks (event delegation)
  board.addEventListener('click', handleMoveTask);

  // --- Initial Load ---
  renderTasks(); // Load and display tasks when the page first loads

}); // End DOMContentLoaded