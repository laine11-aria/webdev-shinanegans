//const form = document.querySelector("#form-task")
//const heading = document.querySelector("#loop")

const { createElement } = require("react");

//form.addEventListener("submit", (e) => {
    //e.preventDefault()

    //heading.textContent = "spidey"})

const form = document.querySelector("#form-task");
const input = document.querySelector("task-inut");
const list = document.qu
erySelector("tasks-list");

let tasks = [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}



function addTask(text) {
    if (text === "") return;
    const task = {
        id: crypto.randomUUID(), 
        text: text, 
        done: false
    }
    tasks.push(task);
    saveTasks();
    renderTasks();
}

function renderTasks() {
    list.innerHTML = ""

    tasks.forEach((task) => {
        const li = document.createElement("li")
        const text = document.createElement('span')
        text.textContent = task.text
        if (task.done) {
            text.style.textDecoration =
            "line-through"
        }

        const doneBtn = document.createElement('button')
        doneBtn.textContent = task.done ? "Undo" : "Done"
        doneBtn.addEventListener("click", () => {
            deleteTask(task.id)
        })        

        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = "Delete"
        deleteBtn.addEventListener("click", () => {
            deleteTask(task.id)
        })     

        li.appendChild(text)
        li.appendChild(doneBtn)
        li.appendChild(deleteBtn)
        list.appendChild(li)
})


function toggleTask(id) {
    const task = tasks.find(t => t.id === id)
    if (!task) return
    task.done = !task.done 
    saveTasks()
    renderTasks()
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id)
}



}


//hindi pa tapos


