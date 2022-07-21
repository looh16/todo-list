
<<<<<<< HEAD
export const editTodoTask = (id) => {
    const localStoragetodos = JSON.parse(localStorage.getItem('todos'));
    const index = localStoragetodos.findIndex((todo) => todo.index === id);
    localStoragetodos[index].description = e.target.value;
=======
export const editTodoTask = (index, description) => {
    const localStoragetodos = JSON.parse(localStorage.getItem('todos'));
    localStoragetodos[index].description = description;
>>>>>>> 461a8e7a3b4c4c45c66fee05993796a50b2191a3
    localStorage.setItem('todos', JSON.stringify(localStoragetodos));
}