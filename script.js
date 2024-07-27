const addTodoButton = document.getElementById('addButton');
const todoInput = document.getElementById('newTask');
const todoList = document.getElementById('todoList');

addTodoButton.addEventListener('click', () => {
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        addTodoItem(todoText);
        todoInput.value = '';
    } else {
        console.log('Input cannot be empty');
    }
});

function addTodoItem(text) {
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            todoItem.classList.add('completed');
            todoList.appendChild(todoItem);
        } else {
            todoItem.classList.remove('completed');
            todoList.insertBefore(todoItem, todoList.firstChild);
        }
    });

    const todoText = document.createElement('span');
    todoText.className = 'taskText';
    todoText.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'dltButton';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        todoList.removeChild(todoItem);
    });

    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteButton);

    todoList.insertBefore(todoItem, todoList.firstChild);
}
