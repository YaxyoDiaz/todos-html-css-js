let todos = [];
let todosHTML1 = '';
let todosHTML2 = '';
let todosDIV1 = document.querySelector('.todos1');
let todosDIV2 = document.querySelector('.todos2');
let url = 'https://jsonplaceholder.typicode.com/todos/';

const getTodos = () => {
  fetch(url)
    .then((response) => response.json())
    .then((res) => {
      todos = res;

      const complatedTodo = todos.filter((todo) => todo.completed === true);
      const notComplatedTodo = todos.filter((todo) => todo.completed === false);

      complatedTodo.map((item) => {
        todosHTML1 += `
          <div class="todo">
              <h2>Задача ${item.id}</h2>
              <p class='green'>${item.title}</p>
          </div>
      `;
      });

      notComplatedTodo.map((item) => {
        todosHTML2 += `
           <div class="todo">
               <h2>Задача ${item.id}</h2>
               <p class='red'>${item.title}</p>
           </div>
       `;
      });

      todosDIV1.innerHTML = todosHTML1;
      todosDIV2.innerHTML = todosHTML2;
    });
};

getTodos();
