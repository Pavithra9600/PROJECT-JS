// let tasks = [];

// function addTask() {
//   const taskInput = document.getElementById("task-input");
//   const taskText = taskInput.value.trim();

//   if (taskText !== "") {
//     const task = { text: taskText, editing: false };
//     tasks.push(task);

//     renderTasks();
//     taskInput.value = "";
//   }
// }

// function editTask(index) {
//   tasks[index].editing = true;
//   renderTasks();
// }

// function saveTask(index) {
//   const editInput = document.getElementById(`edit-input-${index}`);
//   const editedText = editInput.value.trim();

//   if (editedText !== "") {
//     tasks[index].text = editedText;
//     tasks[index].editing = false;
//     renderTasks();
//   }
// }

// function deleteTask(index) {
//   tasks.splice(index, 1);
//   renderTasks();
// }

// function renderTasks() {
//   const taskList = document.getElementById("task-list");
//   taskList.innerHTML = "";

//   tasks.forEach((task, index) => {
//     const listItem = document.createElement("li");

//     if (task.editing) {
//       const editInput = document.createElement("input");
//       editInput.type = "text";
//       editInput.value = task.text;
//       editInput.id = `edit-input-${index}`;
//       editInput.classList.add("edit");
//       listItem.appendChild(editInput);
//     } else {
//       listItem.textContent = task.text;
//     }

//     const editButton = document.createElement("button");
//     editButton.textContent = task.editing ? "Save" : "Edit";
//     editButton.classList.add("edit");
//     editButton.onclick = () => task.editing ? saveTask(index) : editTask(index);

//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.classList.add("delete");
//     deleteButton.onclick = () => deleteTask(index);

//     listItem.appendChild(editButton);
//     listItem.appendChild(deleteButton);
//     taskList.appendChild(listItem);
//   });
// }

//-----------------------------------------------------------------------------

let tasks = [];

function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    tasks.push(taskText);
    renderTasks();
    taskInput.value = "";
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.onclick = () => deleteTask(index);

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  });
}

