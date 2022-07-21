
export const editTodoTask = (e) => {
    const localStoragetodos = JSON.parse(localStorage.getItem('todos'));
    const id = parseInt(e.target.dataset.editid, 10);
    const index = localStoragetodos.findIndex((todo) => todo.index === id);
    localStoragetodos[index].description = e.target.value;
    localStorage.setItem('todos', JSON.stringify(localStoragetodos));
}