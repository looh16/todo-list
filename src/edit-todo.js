
export const editTodoTask = (id) => {
    const localStoragetodos = JSON.parse(localStorage.getItem('todos'));
    const index = localStoragetodos.findIndex((todo) => todo.index === id);
    localStoragetodos[index].description = e.target.value;
    localStorage.setItem('todos', JSON.stringify(localStoragetodos));
}