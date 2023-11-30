// name: Ahmad el-khawaldeh
// student id: 101257771
// Assignment 4: to do app


// Constants
const appID = "app";
const headingText = " ";

// DOM Elements
let appContainer = document.getElementById(appID);
let todoIdCounter = 0;
let todoItems = [];
let selectedDay = null;

// Functions

// Add a heading to the app container
function initialise() {
  if (!appContainer) {
    console.error("Error: Could not find app container");
    return;
  }

  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  console.log("App successfully initialised");
}


// Add a todo to the list
function addToDo() {
  const inputField = document.getElementById("todoInput");
  const todoText = inputField.value.trim();

  if (todoText === "") {
    alert("Please enter a task.");
    return;
  }

  if (selectedDay === null) {
    alert("Please select a day before adding a task.");
    return;
  }

  const newTodo = {
    id: todoIdCounter++,
    text: todoText,
    completed: false,
  };

  if (!todoItems[selectedDay]) {
    todoItems[selectedDay] = [];
  }

  todoItems[selectedDay].push(newTodo);
  inputField.value = "";
  renderToDoList();
}

// Function to remove a todo from the list
function removeToDoItem(todoId) {
  if (selectedDay !== null && todoItems[selectedDay]) {
    todoItems[selectedDay] = todoItems[selectedDay].filter((todo) => todo.id !== todoId);
    renderToDoList();
  }
}

// Function to mark a task as completed
function markToDoItemAsCompleted(todoId) {
  if (selectedDay !== null && todoItems[selectedDay]) {
    const todo = todoItems[selectedDay].find((todo) => todo.id === todoId);

    if (todo) {
      todo.completed = !todo.completed;
      renderToDoList();
    }
  }
}

// Function to delete a task from the array
function deleteToDoItem(todoId) {
  if (selectedDay !== null && todoItems[selectedDay]) {
    const todoIndex = todoItems[selectedDay].findIndex((todo) => todo.id === todoId);

    if (todoIndex !== -1) {
      todoItems[selectedDay].splice(todoIndex, 1);
      renderToDoList();
    }
  }
}

// Function to clear all completed tasks
function clearCompletedTasks() {
  if (selectedDay !== null && todoItems[selectedDay]) {
    todoItems[selectedDay] = todoItems[selectedDay].filter((todo) => !todo.completed);
    renderToDoList();
  }
}

function renderDaysOfWeek() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const daysOfWeekContainer = document.getElementById("daysOfWeek");

  daysOfWeek.forEach((day) => {
    const dayElement = document.createElement("button");
    dayElement.textContent = day;
    dayElement.addEventListener("click", () => handleDaySelection(day));
    daysOfWeekContainer.appendChild(dayElement);
  });
}

function handleDaySelection(selectedDayValue) {
  selectedDay = selectedDayValue;
  const daysOfWeekContainer = document.getElementById("daysOfWeek");
  const daysOfWeek = daysOfWeekContainer.children;
  const selectedDayDisplay = document.getElementById("selectedDayDisplay");

  for (let i = 0; i < daysOfWeek.length; i++) {
    const day = daysOfWeek[i];
    day.classList.toggle("selected", day.textContent === selectedDay);
  }

  selectedDayDisplay.textContent = `Selected Day: ${selectedDay}`;
  renderToDoList();
}

function renderToDoList() {
  const todoListContainer = document.getElementById("todoList");

  // Clear existing list items
  todoListContainer.innerHTML = "";

  // Render each todo item
  if (selectedDay !== null && todoItems[selectedDay]) {
    todoItems[selectedDay].forEach((todo) => {
      const listItem = document.createElement("li");
      listItem.classList.add("todo-item");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.completed;
      checkbox.addEventListener("change", () => markToDoItemAsCompleted(todo.id));

      const todoText = document.createElement("text");
      todoText.textContent = todo.text;
      todoText.classList.add("text");
      todoText.classList.toggle("completed", todo.completed);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => deleteToDoItem(todo.id));

      listItem.appendChild(checkbox);
      listItem.appendChild(todoText);
      listItem.appendChild(deleteButton);

      todoListContainer.appendChild(listItem);
    });
  }
}
initialise();
renderDaysOfWeek();
