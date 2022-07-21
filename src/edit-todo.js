// eslint-disable-next-line
export const editTodoTask = (index, description) => {
  const localStoragetodos = JSON.parse(localStorage.getItem('todos'));
  localStoragetodos[index].description = description;
  localStorage.setItem('todos', JSON.stringify(localStoragetodos));
};