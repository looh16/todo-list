// eslint-disable-next-line
import { getAllTodos } from './todo';

export const updateToFalse = (todo) => {
  const localStoragetodos = getAllTodos();
  const index = localStoragetodos.findIndex((td) => td.index === todo.index);
  localStoragetodos[index].completed = false;
  localStorage.setItem('todos', JSON.stringify(localStoragetodos));
};

export const updateToTrue = (todo) => {
  const localStoragetodos = getAllTodos();
  const index = localStoragetodos.findIndex((td) => td.index === todo.index);
  localStoragetodos[index].completed = true;
  localStorage.setItem('todos', JSON.stringify(localStoragetodos));
};

const btnClear = document.getElementById('deleteAllCompleted');
// eslint-disable-next-line
btnClear.addEventListener('click', (e) => {
  let localStoragetodos = getAllTodos();
  localStoragetodos = localStoragetodos.filter((todo) => todo.completed !== true);
  localStorage.setItem('todos', JSON.stringify(localStoragetodos));
  // eslint-disable-next-line
  location.reload();
});

const btnRefresh = document.getElementById('refreshDom');
// eslint-disable-next-line
btnRefresh.addEventListener('click', (e) => {
// eslint-disable-next-line
  location.reload();
});