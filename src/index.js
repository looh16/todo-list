import './style.css';
// eslint-disable-next-line
import Sortable from '../node_modules/sortablejs/modular/sortable.complete.esm';
import Todo from './todo-class.js';
import { addTodo, renderTodo } from './todo.js';
import { clearAllCompleted } from './clear-all.js';

const todosListEl = document.getElementById('todos-list');
const todoInput = document.getElementById('newtodo');
const btnClear = document.getElementById('deleteAllCompleted');

let addNewTodo = new Todo(false, todoInput.value);

todoInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();

    addNewTodo = new Todo(false, todoInput.value);

    addTodo(addNewTodo);
    todoInput.value = '';
    renderTodo();
  }
});

// eslint-disable-next-line
btnClear.addEventListener('click', (e) => {
  clearAllCompleted();
});

const btnRefresh = document.getElementById('refreshDom');
// eslint-disable-next-line
btnRefresh.addEventListener('click', (e) => {
// eslint-disable-next-line
  location.reload();
});

window.onload = renderTodo;

// eslint-disable-next-line
new Sortable(todosListEl, {
  handle: '.drag',
  animation: 150,
});
