import './style.css';
// eslint-disable-next-line
import Sortable from '../node_modules/sortablejs/modular/sortable.complete.esm';
import Todo from './todo';

const todosListEl = document.getElementById('todos-list');
const todoInput = document.getElementById('newtodo');

let todos = [];

let addNewTodo = new Todo(false, todoInput.value);

todoInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();

    addNewTodo = new Todo(false, todoInput.value);

    todos = addNewTodo.addTodo(addNewTodo);
    console.log(todos);
    todoInput.value = '';
    addNewTodo.renderTodo(todos);
  }
});

window.onload = addNewTodo.renderTodo;

// eslint-disable-next-line
new Sortable(todosListEl, {
  handle: '.drag',
  animation: 150,
});
