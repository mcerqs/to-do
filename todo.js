console.log("JS it's working...");

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
  'Fazer javascript',
  'Estudar mais javascript',
  'Acessar comunidade javascript'
];

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

renderTodos();

function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);

  inputElement.value = '';

  renderTodos();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1);

  if (todos.length <= 0) {
    alert('Sua lista de to-do ficará vazia');
  }

  renderTodos();
}