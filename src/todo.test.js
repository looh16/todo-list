import Todo from './todo-class';
import { addTodo } from './todo';
//import { getAllTodos } from './todo.js'



  
  describe('my beverage', () => {

    let todo = new Todo(false, "My task");
    let result = addTodo(todo);

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

    test('Add', () => {
      expect(result[0].description).toBe("My task");
    });
  });

  