import { getAllTodos } from "./todo";

export const clearAllCompleted = () => {
    let localStoragetodos = getAllTodos();
    localStoragetodos = localStoragetodos.filter((todo) => todo.completed !== true);
    localStorage.setItem('todos', JSON.stringify(localStoragetodos));
    // eslint-disable-next-line
    location.reload();
}