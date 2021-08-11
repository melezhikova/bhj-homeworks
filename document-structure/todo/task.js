const tasksBox = document.querySelector(".tasks__list");
const taskInput = document.getElementById("task__input");
const taskButtonAdd = document.getElementById("tasks__add");

function taskAdd () {
    if (taskInput.value) {
        console.log(taskInput.value);
        tasksBox.innerHTML += `
            <div class="task">
                <div class="task__title">${taskInput.value}</div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `;
        taskInput.value = "";
    }
    let list = Array.from(document.querySelectorAll(".task"));
    let removeButtons = Array.from(document.querySelectorAll(".task__remove"));
    for (let i = 0; i < removeButtons.length; i++) {
        button = removeButtons[i];
        button.onclick = () => {
            list[i].remove();
        }
    }
}

function check (event) {
    if (event.key === 'Enter') {
        taskAdd();
    }
}

window.addEventListener('keydown', check);
taskButtonAdd.addEventListener("click", taskAdd);
