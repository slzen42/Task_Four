document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();

        const row = document.createElement('tr');
        row.classList.add('task-row');
        row.innerHTML = `
            <td>${taskText}</td>
            <td>${date}</td>
            <td>${time}</td>
            <td>
                <button class="btn btn-danger btn-sm delete-task">Delete</button>
            </td>
        `;

        taskList.appendChild(row);
        taskInput.value = '';

        // Add event listener for delete button
        row.querySelector('.delete-task').addEventListener('click', function() {
            taskList.removeChild(row);
        });
    });
});

