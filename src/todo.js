
export default class Todo {
  static count = 1;

  constructor(completed, description) {
    this.index = this.constructor.count++;
    this.completed = completed;
    this.description = description;
  }

  getAllTodos = () => {

    const todos = JSON.parse(localStorage.getItem('todos'));
    return todos || [];

  }

  addTodo = (todo) => {

    const todos = this.getAllTodos();
    todos.unshift(todo);

    localStorage.setItem('todos', JSON.stringify(todos));

    return todos;
  }

  renderTodo = () => {

    let todos = this.getAllTodos();

    const todosListEl = document.getElementById('todos-list');
    todosListEl.innerHTML = '';

    todos.forEach((todo) => {
      todosListEl.innerHTML += `
        <div class="todo" id=${todo.index}>
        
          <div class="todoTask">
            <input type="checkbox" id="todoCheck" name="todoCheck">
            <label class="checkboxes" for="todoCheck">${todo.description}</label> 
          </div>

          <div class="options">

             <button id ="dropdown" class="btnTogle"><i class="drag bi bi-three-dots-vertical"></i></button>

            <div id="sectiontohide" class="optionDropdown">
                <button class="option-item"><i class="bi bi-pencil-square"></i></i></button>
                <button id="delete" class="option-item"><i class="bi bi-trash3" data-index="${todo.index}"></i></button>
            </div>

         </div>
        </div>
       
        `;

      if (todo.completed) {
        document.getElementById('todoCheck').checked = true;
      }
    });

   // const deleteBtn = document.getElementById('test');
   const deleteBtn = document.querySelectorAll('#delete');
    //deleteBtn.addEventListener('click', this.deleteTodo)

    deleteBtn.forEach((button) => {
      button.addEventListener('click', (event) => {

        const id  = parseInt(event.target.getAttribute('data-index'), 10)

        let localStoragetodos = this.getAllTodos();

        localStoragetodos = localStoragetodos.filter((book) => book.index !== id);

       // localStoragetodos.splice(id, 1)
        localStorage.setItem('todos', JSON.stringify(localStoragetodos))
      //  renderTodo()
        location.reload()
       // this.removeTask(id);
      });
    });

  }


}




