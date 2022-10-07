const TODOS_KEY = "toDos";

const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let toDos = [];

// Get to-dos if there's saved to-dos in local storage
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); 
}

// uuid generator
// https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid
function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11)
            .replace(/[018]/g, c =>
                (c ^ crypto
                        .getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4)
                        .toString(16)
  );
}

function saveToDosToLocalStorage() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoDelete(event) {
    const li = event.target.parentElement;
    const toDoIdToDelete = li.id;
    toDos = toDos.filter((todo) => todo.id !== toDoIdToDelete);
    saveToDosToLocalStorage();
    li.remove();
}

function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newToDoObj.text;
    button.innerText = "❌";
    button.addEventListener("click", handleToDoDelete);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const toDoObj = {
        id: uuidv4(),
        text:newToDo,
    }
    toDos.push(toDoObj);
    paintToDo(toDoObj);
    saveToDosToLocalStorage();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
