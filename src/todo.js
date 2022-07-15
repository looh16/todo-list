export default class Todo {
  static count = 0;

  constructor(completed, description) {
    // eslint-disable-next-line
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
    const todos = this.getAllTodos();

    const todosListEl = document.getElementById('todos-list');
    todosListEl.innerHTML = '';

    todos.forEach((todo) => {
      todosListEl.innerHTML += `
        <div class="todo" id=${todo.index}>
        
          <div class="todoTask">
            <input type="checkbox" id="todoCheck" name="todoCheck"> 
            <input type="text" id="description" class="checkboxes" for="todoCheck" data-editID="${todo.index}" value="${todo.description}">
           

          </div>

          <div class="options">

             <button id ="dropdown" class="btnTogle"><i class="drag bi bi-three-dots-vertical"></i></button>

            <div id="sectiontohide" class="optionDropdown">
                <button id="delete" class="option-item"><i class="bi bi-trash3" data-index="${todo.index}"></i></button>
            </div>

         </div>
        </div>
       
        `;

      if (todo.completed) {
        document.getElementById('todoCheck').checked = true;
      }
    });

    const deleteBtn = document.querySelectorAll('#delete');
    const textLabel = document.querySelectorAll('#description');
    const dropdownBtn = document.querySelectorAll('#dropdown');
    const divDropdownBtn = document.querySelectorAll('#sectiontohide');

    deleteBtn.forEach((button) => {
      button.addEventListener('click', (event) => {
        const id = parseInt(event.target.getAttribute('data-index'), 10);
        let localStoragetodos = this.getAllTodos();
        localStoragetodos = localStoragetodos.filter((todo) => todo.index !== id);
        // eslint-disable-next-line
        for (let id = 0; id < localStoragetodos.length; id++) {
          localStoragetodos[id].index = id;
        }
        localStorage.setItem('todos', JSON.stringify(localStoragetodos));
        // eslint-disable-next-line
        location.reload();
      });
    });

    dropdownBtn.forEach((dropBtn) => {
      dropBtn.addEventListener('click', (event) => {
        event.preventDefault();
        divDropdownBtn.forEach((div) => {
          if (div.style.display === 'none') { div.style.display = 'block'; } else { div.style.display = 'none'; }
        });
      });
    });

    function editTodo(e) {
      const localStoragetodos = JSON.parse(localStorage.getItem('todos'));
      const id = parseInt(e.target.dataset.editid, 10);
      const index = localStoragetodos.findIndex((todo) => todo.index === id);
      localStoragetodos[index].description = e.target.value;
      localStorage.setItem('todos', JSON.stringify(localStoragetodos));
    }

    textLabel.forEach((text) => {
      text.addEventListener('keyup', editTodo);
    });
  }
}