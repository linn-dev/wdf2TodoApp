const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Local Storage
let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];
console.log(tasks);

function renderTasks() {
  todoList.innerHTML = "";

  tasks.forEach(function (task, index) {
    const li = document.createElement("li");
    li.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener("click", function () {
      deleteTask(index);
    });

    li.append(deleteButton);
    todoList.appendChild(li);
  });
}

// Delete Task Function
function deleteTask(index) {
  tasks.splice(index, 1);
  saveAndRender();
}

// Save to current array to localStorage
function saveAndRender() {
  localStorage.setItem("myTasks", JSON.stringify(tasks)); //save
  renderTasks();
}

// Function to add a new task
addBtn.addEventListener("click", function () {
  const taskText = todoInput.value.trim(); // Homework

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  tasks.push(taskText); // [Homework]
  todoInput.value = "";
  saveAndRender();
});

renderTasks(); //initial run