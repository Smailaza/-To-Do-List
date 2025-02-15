document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <button onclick="removeTask(this)">حذف</button>`;
        li.addEventListener('click', function () {
            li.classList.toggle('completed');
        });
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}
