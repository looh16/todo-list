import Todo from './todo-class';
import { addTodo } from './todo';
import { deleteTodo } from './delete-todo';
import { getAllTodos } from './todo';
import 'jest-localstorage-mock';


  describe('my todo task', () => {

    let todo = new Todo(false, "My task");
    let todo1 = new Todo(false, "My task");
    addTodo(todo);
    addTodo(todo1);

    document.body.innerHTML =
    `
        <div class="todo" id=${todo.index}>
        
          <div class="todoTask">
            <input type="checkbox" id="todoCheck" name="todoCheck" data-todoStatus="${todo.index}" data-todoCompleted="${todo.completed}"> 
            <input type="text" id="description" class="checkboxes" for="todoCheck" data-editID="${todo.index}" value="${todo.description}">
           

          </div>

          <div class="options">

             <button id ="dropdown" class="btnTogle"><i class="drag bi bi-three-dots-vertical"></i></button>

            <div id="sectiontohide" class="optionDropdown">
                <button id="delete" class="option-item"><i class="bi bi-trash3" data-index="${todo.index}"></i></button>
            </div>

         </div>
        </div>
       
        `

    test('add', () => {
    //  expect(result[0].description).toBe("My task");
      expect(localStorage.getItem.mock.calls.length).toBe(2);
    });

    test('delete', () => {
        const deleteBtn = document.querySelectorAll('#delete');
        deleteBtn.forEach = (btn) => { 
          deleteTodo(btn);
        }
        expect(localStorage.getItem.mock.calls.length).toBe(0);
    })

  });