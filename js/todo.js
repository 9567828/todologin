const todoForm = document.getElementById("todo_form")
const todoInput = document.querySelector(".todo_box input")
const todoList = document.getElementById("todo_list")

const TODOS_KEY = "todos"

let toDos = [];

function saveTodo () {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteTodo (event) {
  const li = event.target.parentElement
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
  saveTodo ();
}

function paintTodo (newTodo) {
  const li = document.createElement("li")
  li.id = newTodo.id;
  const span = document.createElement("span")
  span.innerText = newTodo.text;
  const delIcon = document.createElement("span")
  delIcon.setAttribute("class", "fa-solid fa-trash-can")
  // delIcon.innerText = "❌";
  delIcon.addEventListener("click", deleteTodo)
  li.appendChild(span)
  li.appendChild(delIcon)
  todoList.appendChild(li)
}

function handleTodoSubmit (event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }

  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit)

const savedTodos = localStorage.getItem(TODOS_KEY)
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos)
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo)
}