const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
    fetch(apiUrl + '?_limit=5')
    .then(res => res.json())
    .then((data) => {
       data.forEach((todo) => addTodoDOM(todo))
    })
}

const addTodoDOM = (todo) => {
    const div = document.createElement('div')
    div.appendChild(document.createTextNode(todo.title))
    div.setAttribute('data-id', todo.id)

    if (todo.completed) {
       div.classList.add('done')
    }

    document.getElementById('todo-list').appendChild(div)
}

const createTodo = () => {
    e.preventDefault()

    const newTodo = {
        title: e.target.firstElementChild.value,
        completed: false
    }

    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => addTodoDOM(data))
}

const init = () => {
    document.addEventListener('DOMContentLoaded', getTodos)
    document.querySelector('#todo-form').addEventListener('submit', createTodo)
}


getTodos();
