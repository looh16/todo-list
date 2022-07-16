import { getAllTodos } from "./todo";

export const updateToFalse = (todo) => {

    const localStoragetodos = getAllTodos();
    const index = localStoragetodos.findIndex((td) => td.index === todo.index);
    localStoragetodos[index].completed = false;
    localStorage.setItem('todos', JSON.stringify(localStoragetodos));
}

export const updateToTrue = (todo) => {

    const localStoragetodos = getAllTodos();
    const index = localStoragetodos.findIndex((td) => td.index === todo.index);
    localStoragetodos[index].completed = true;
    localStorage.setItem('todos', JSON.stringify(localStoragetodos));
}

const btnClear = document.getElementById('deleteAllCompleted');
btnClear.addEventListener('click', (e) => {
    let localStoragetodos = getAllTodos();
    localStoragetodos = localStoragetodos.filter(function(todo) {
        return todo.completed !== true
    })
    localStorage.setItem('todos', JSON.stringify(localStoragetodos));
    location.reload();
});

const btnRefresh = document.getElementById('refreshDom');
btnRefresh.addEventListener('click', (e) => {
    location.reload();
});