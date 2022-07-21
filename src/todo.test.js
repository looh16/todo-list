import Todo from './todo-class.js';
import { addTodo } from './todo.js';
import { deleteTodo } from './delete-todo.js';
import { editTodoTask } from './edit-todo.js';
import { clearAllCompleted } from './clear-all.js';

describe('my todo task', () => {
  const todo = new Todo(true, 'My task');
  const todo1 = new Todo(true, 'My task');
  const todo2 = new Todo(true, 'My task');
  addTodo(todo);
  addTodo(todo1);
  addTodo(todo2);

  document.body.innerHTML = `
        <div class="todo" id=${todo.index}>
        
          <div class="todoTask">
            <input type="checkbox" id="todoCheck" name="todoCheck" data-todoStatus="${todo.index}" data-todoCompleted="${todo.completed}"> 
            <input type="text" class="description" class="checkboxes" for="todoCheck" data-editID="${todo.index}" value="${todo.description}">
           

          </div>

          <div class="options">

             <button id ="dropdown" class="btnTogle"><i class="drag bi bi-three-dots-vertical"></i></button>

            <div id="sectiontohide" class="optionDropdown">
                <button id="delete" class="option-item"><i class="bi bi-trash3" data-index="${todo.index}"></i></button>
            </div>

         </div>
        </div>
       
        `;

  test('add', () => {
    expect(localStorage.getItem.mock.calls.length).toBe(3);
  });

  test('delete', () => {
    const deleteBtn = document.querySelectorAll('#delete');
    deleteBtn.forEach = (btn) => {
      deleteTodo(btn);
    };
    expect(localStorage.getItem.mock.calls.length).toBe(3);
  });

  test('edit', () => {
    editTodoTask(todo.index, 'My task');
    expect(todo.description).toBe('My task');
  });

  test('update status', () => {
    const completeOne = document.querySelectorAll('#todoCheck')[0].checked;
    expect(completeOne).toBe(false);
  });

  test('clear all', () => {
    clearAllCompleted();
    const desc = document.querySelectorAll('.description');

    expect(desc.length).toBe(1);
  });
});
