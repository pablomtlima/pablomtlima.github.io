const formAddTodo = document.querySelector(".form-add-todo");
const todosContainer = document.querySelector(".todos-container");
const formSearch = document.querySelector(".form-search");

const addTodo = (addInput) => {
  if (addInput.length) {
    todosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${addInput}">
        <span>${addInput}</span>
        <i class="far fa-trash-alt" data-trash="${addInput}"></i>
        </li>`;

    event.target.reset();
  }
};
formAddTodo.addEventListener("submit", (event) => {
  event.preventDefault();
  const addInput = event.target.add.value.trim();
  addTodo(addInput);
});

const removeTodo = (elementoClicado) => {
  const trashDataValue = elementoClicado.dataset.trash;
  const todo = document.querySelector(`[data-todo="${trashDataValue}"]`);

  if (trashDataValue) {
    todo.remove();
  }
};

const filterTodos = (todos, inputValue, returnMatchedTodos) =>
  todos.filter(todo => {
    const matchedTodos = todo.textContent.toLowerCase().includes(inputValue.toLowerCase());
    return returnMatchedTodos ? matchedTodos : !matchedTodos;
  });

const manipulateClasses = (todos, classToAdd, classToRemove) => {
  todos.forEach(todo => {
    todo.classList.remove(classToRemove);
    todo.classList.add(classToAdd);
  });
};

const hideTodos = (todos, inputValue) => {
  const todosToHide = filterTodos(todos, inputValue, false);
  manipulateClasses(todosToHide, "hidden", "d-flex");
};

const showTodos = (todos, inputValue) => {
  const todosToShow = filterTodos(todos, inputValue, true);
  manipulateClasses(todosToShow, "d-flex", "hidden");
};

todosContainer.addEventListener("click", (event) => {
  const elementoClicado = event.target;
  removeTodo(elementoClicado);
});

formSearch.addEventListener("input", (event) => {
  const todos = Array.from(todosContainer.children);
  const inputValue = event.target.value.trim();

  hideTodos(todos, inputValue);
  showTodos(todos, inputValue);
});