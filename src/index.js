import "./style.css";
import Sortable from "../node_modules/sortablejs/modular/sortable.complete.esm";



const todosListEl = document.getElementById('todos-list');

const todos = [
    {
        index: 1,
        completed: false,
        description: 'wash the dishes',
    },
    {
        index: 2,
        completed: true,
        description: 'Do all challenge',
    },

];

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

        if(todo.completed){
            document.getElementById("todoCheck").checked = true;

         }
});

new Sortable(todosListEl, {
    handle: '.drag',
    animation: 150
});


