import './style.css';
// eslint-disable-next-line
import Sortable from '../node_modules/sortablejs/modular/sortable.complete.esm';
import Todo from './todo-class';
import { addTodo, renderTodo } from './todo';

const todosListEl = document.getElementById('todos-list');
const todoInput = document.getElementById('newtodo');

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

window.onload = renderTodo;

// eslint-disable-next-line
new Sortable(todosListEl, {
  handle: '.drag',
  animation: 150,
});
