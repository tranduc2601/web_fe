const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${todo}
      <button class="delete-btn" onclick="deleteTodo(${index})">Xóa</button>
    `;
    todoList.appendChild(li);
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

addBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (value !== "") {
    todos.push(value);
    input.value = "";
    renderTodos();
  }
});

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

window.onload = renderTodos;
