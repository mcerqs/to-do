var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// Input focus
var inputFocusElement = document.querySelector('.inputFocus');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

// List todos
function renderTodos() {
  listElement.innerHTML = '';

  for(todo of todos) {
    // console.log(todo)
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkElelement = document.createElement('a');
    var linkText = document.createTextNode('Excluir');

    linkElelement.setAttribute('href', 'javascript:');
    linkElelement.appendChild(linkText);

    var pos = todos.indexOf(todo);
    linkElelement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElelement);

    listElement.appendChild(todoElement);
  }
}

// Load todos
renderTodos();

// Add item
function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);

  inputElement.value = '';

  renderTodos();
  saveToStorage();
  inputFocus();
}

// Event click
buttonElement.onclick = addTodo;

// Delete item
function deleteTodo(pos) {
  todos.splice(pos, 1);

  if (todos.length <= 0) {
    alert('Sua lista de to-do ficará vazia');
  }

  renderTodos();
  saveToStorage();
  inputFocus();
}

// Save to storage
function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos));
}

// Focus input
function inputFocus() {
  inputFocusElement.focus();
}