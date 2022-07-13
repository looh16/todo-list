
let todos = [];

class Todo {
  static count = 1;

  constructor(completed, description) {
    this.index = this.constructor.count++;
    this.completed = completed;
    this.description = description;
  }

  addTodo = (todo) => {

    todos.unshift(todo);

    return todos;
  }

  renderTodo = (todos) => {
    const todosListEl = document.getElementById('todos-list');
    todosListEl.innerHTML = '';

    todos.forEach((todo, index) => {
      todosListEl.innerHTML += `
        <div class="todo" id=${index}>
          <input type="checkbox" id="todoCheck" name="todoCheck">
          <label class="checkboxes" for="todoCheck">${todo.description}</label> 
          <span>
            <i class="drag bi bi-three-dots-vertical"></i>
          </span>
        </div>
        `;

      if (todo.completed) {
        document.getElementById('todoCheck').checked = true;
      }
    });
  }

}



export default Todo;