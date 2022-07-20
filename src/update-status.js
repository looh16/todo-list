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
