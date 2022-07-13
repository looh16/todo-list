import './style.css';
// eslint-disable-next-line
import Sortable from '../node_modules/sortablejs/modular/sortable.complete.esm';
import Todo from './todo';

const todosListEl = document.getElementById('todos-list');
const todoInput = document.getElementById('newtodo');

let todos = [];

todoInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();

    let addNewTodo = new Todo(false, todoInput.value);

    todos = addNewTodo.addTodo(addNewTodo);
    todoInput.value = '';
    addNewTodo.renderTodo(todos);

  }
});

// eslint-disable-next-line
new Sortable(todosListEl, {
  handle: '.drag',
  animation: 150,
});
