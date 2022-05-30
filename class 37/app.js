// console.log("hello world")

// var parent = document.getElementById("parent").setAttribute("class", "class1");
// console.log(parent);
// console.log(parent.firstElementChild);

var todoList = document.getElementById("todoList"); //ul element
// console.log(todoList.children.length);
var items = document.getElementById("items");
var count = 0;
items.innerHTML = count;

function addTodo() {
  var input = document.getElementById("input");
  if (input.value.length >= 5 && input.value.length <= 20) {
    //create li and li text
    var li = document.createElement("li");
    // li.innerHTML = input.value;
    var liText = document.createTextNode(input.value);
    li.appendChild(liText);
    console.log(li);

    ///create DELETE BTN
    var delBtn = document.createElement("button");
    delBtn.innerHTML = "DEL";
    li.appendChild(delBtn);
    delBtn.setAttribute("onclick", "deleteTodo(this)");
    delBtn.className = "btn btn-danger ";

    ///create EDIT BTN
    var editBtn = document.createElement("button");
    editBtn.innerHTML = "EDIT";
    li.appendChild(editBtn);
    editBtn.setAttribute("onclick", "editTodo(this)");
    editBtn.className = "btn btn-primary ms-auto  ";

    todoList.appendChild(li);
    input.value = "";
    count++;
    items.innerHTML = count;
  } else {
    alert("enter correct todo ");
  }
}

function deleteTodo(e) {
  console.log(e.parentNode);
  e.parentNode.remove();
  count--;
  items.innerHTML = count;
}

function editTodo(e) {
  var editValue = prompt("ENTER TODO VALUE", e.parentNode.firstChild.nodeValue);
  e.parentNode.firstChild.nodeValue = editValue;
}

function delAll() {
  todoList.innerHTML = "";
  count = 0;
  items.innerHTML = count;
}
