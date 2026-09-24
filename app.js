const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todolist = document.getElementById("todo-list");

// Add Event Listener to the Add Button
addBtn.addEventListener("click", function() {
    const taskText = todoInput.value;

    if(taskText === "") {
        alert("Please enter a task!");
        return;
    }
    
    // Create new <li> element
    const li = document.createElement("li");
    li.textContent = taskText;

    // Toggle completed status of click
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    })

    // Create Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");

    // Delete item on click
    deleteBtn.addEventListener("click", function() {
        li.remove();
    })

    // Appen delete button to li
    li.appendChild(deleteBtn);
    todolist.appendChild(li);

    // Clear input field
    todoInput.value = "";
})
