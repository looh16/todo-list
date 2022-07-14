
let todos = [];

export default class Todo {
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
        
          <div class="todoTask">
            <input type="checkbox" id="todoCheck" name="todoCheck">
            <label class="checkboxes" for="todoCheck">${todo.description}</label> 
          </div>

          <div class="options">

             <button class="btnTogle"><i class="drag bi bi-three-dots-vertical"></i></button>
             
            <div class="optionDropdown">
                <button class="option-item"><i class="bi bi-pencil-square"></i></i></button>
                <button class="option-item"><i class="bi bi-trash3"></i></button>
            </div>

         </div>
        </div>
       
        `;

      if (todo.completed) {
        document.getElementById('todoCheck').checked = true;
      }
    });

    let toggleBtns = document.querySelectorAll('.toggleBtn')
    let  options = document.querySelectorAll('.options')
    
    const optionsToggle = () => {
        toggleBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.path[3].classList.toggle('active')
            })
        })
    
        document.addEventListener('click', (e) => {
            options.forEach(option => {
                if (e.target.contains(option)) {
                    document.querySelectorAll('.item').forEach(item => {
                        item.classList.remove('active')
                    })
                }
            })
        })
    }

    optionsToggle()

  }

}

export const checkboxInput = document.getElementById('todoCheck');




