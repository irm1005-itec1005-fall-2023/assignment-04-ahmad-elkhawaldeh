


/*
// Constants
const appID = "app";
const headingText = " ";

// DOM Elements
let appContainer = document.getElementById(appID);
let todoIdCounter = 0;
let todoItems = [];
let selectedDay = ""; // Added variable to store the selected day

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

  if (todoText !== "" && selectedDay !== "") { // Check if a day is selected
    const newTodo = {
      id: todoIdCounter++,
      text: todoText,
      completed: false,
      day: selectedDay, // Assign the selected day to the todo
    };

    todoItems.push(newTodo);
    inputField.value = "";
    renderToDoList();
  }
}

// Function to remove a todo from the list
function removeToDoItem(todoId) {
  todoItems = todoItems.filter((todo) => todo.id !== todoId);
  renderToDoList();
}

// Function to mark a task as completed
function markToDoItemAsCompleted(todoId) {
  const todo = todoItems.find((todo) => todo.id === todoId);

  if (!todo) {
    console.error(`Todo with ID ${todoId} not found.`);
    return;
  }

  todo.completed = !todo.completed;
  renderToDoList();
}

// Function to delete a task from the array
function deleteToDoItem(todoId) {
  const todoIndex = todoItems.findIndex((todo) => todo.id === todoId);

  if (todoIndex === -1) {
    console.error(`Todo with ID ${todoId} not found.`);
    return;
  }

  todoItems.splice(todoIndex, 1);
  renderToDoList();
}

// Function to clear all completed tasks
function clearCompletedTasks() {
  todoItems = todoItems.filter((todo) => !todo.completed);
  renderToDoList();
}

// Function to render the days of the week
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
  const daysOfWeekContainer = document.getElementById("daysOfWeek");
  const daysOfWeek = daysOfWeekContainer.children;

  for (let i = 0; i < daysOfWeek.length; i++) {
    const day = daysOfWeek[i];
    day.classList.toggle("selected", day.textContent === selectedDayValue);
  }

  selectedDay = selectedDayValue;
  updateSelectedDay(selectedDay);
}

function updateSelectedDay(selectedDay) {
  const selectedDayDisplay = document.getElementById("selectedDayDisplay");
  selectedDayDisplay.textContent = `Selected Day: ${selectedDay}`;
}

function renderToDoList() {
  const todoListContainer = document.getElementById("todoList");

  // Clear existing list items
  todoListContainer.innerHTML = "";

  // Filter tasks based on the selected day
  const filteredTasks = todoItems.filter((todo) => todo.day === selectedDay);

  // Render each filtered todo item
  filteredTasks.forEach((todo) => {
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

// Inits & Event Listeners
initialise();
renderDaysOfWeek();
*/



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

// Inits & Event Listeners
initialise();
renderDaysOfWeek();
