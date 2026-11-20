//const form = document.querySelector("#form-task")
//const heading = document.querySelector("#loop")

const { createElement } = require("react");

//form.addEventListener("submit", (e) => {
    //e.preventDefault()

    //heading.textContent = "spidey"})

const form = document.querySelector("#form-task");
const input = document.querySelector("task-inut");
const list = document.querySelector("tasks-list");

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
    //renderTasks();
}

function renderTasks() {
    list.innerHTML = ""

    tasks.forEach((task) => {
        const text = document.createElement
        ('span')
        text.textContent = task.text
        if (task.done) {
            text.style.textDecoration =
            "line-through"
        }

        const doneBtn = document.createElement
        ('button')
        


    })
}





//hindi pa tapos