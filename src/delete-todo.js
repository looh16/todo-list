// eslint-disable-next-line
import { getAllTodos } from './todo';

// eslint-disable-next-line
export const deleteTodo = (button) => {
  button.addEventListener('click', (event) => {
    const id = parseInt(event.target.getAttribute('data-index'), 10);
    let localStoragetodos = getAllTodos();
    localStoragetodos = localStoragetodos.filter((todo) => todo.index !== id);
    // eslint-disable-next-line
          for (let id = 0; id < localStoragetodos.length; id++) {
      localStoragetodos[id].index = id;
    }
    localStorage.setItem('todos', JSON.stringify(localStoragetodos));
    // eslint-disable-next-line
          location.reload();
  });
};
