import { getAllTodos } from './todo.js';
// eslint-disable-next-line
export const clearAllCompleted = () => {
  let localStoragetodos = getAllTodos();
  localStoragetodos = localStoragetodos.filter((todo) => todo.completed !== true);
  localStorage.setItem('todos', JSON.stringify(localStoragetodos));
  // eslint-disable-next-line
    location.reload();
};