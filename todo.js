const addBtn = document.querySelector('#addBtn');
const todoInput = document.querySelector('#todo-input');

const addToDo = () => {
	const todoInput = document.querySelector('#todo-input');
	if (todoInput.value) {
		createToDoHtml(todoInput.value);
		todoInput.value = '';
	} else {
		alert('please enter your do to..!!!');
	}
};

const updateToDo = () => {
	alert('clicked');
	var editInput = document.createElement('input'); //text
	var editButton = document.createElement('button'); //edit button
};

const deleteToDo = () => {
	const delBtnn = document.getElementById('todolist');
	delBtnn.remove();
};

const createToDoHtml = (userInput) => {
	let newTodoHTML = `
    <div class="pb-3 todo-item" id="todolist">
        <div class="input-group">
             <input type="text" readonly class="form-control "aria-label="Text input" value="${userInput}" >
             <button class="btn btn-outline-secondary bg-success text-white" type="button" onclick="updateToDo()" id="edit">EDIT</button>
             <button class="btn btn-outline-secondary bg-danger text-white" type="button" onclick="deleteToDo()" id="delete">DELETE</button>
        </div>
    </div>`;

	let div = document.createElement('DIV');
	div.innerHTML = newTodoHTML;
	document.getElementById('todo-container').appendChild(div.children[0]);
};

addBtn.addEventListener('click', addToDo);
todoInput.addEventListener('keydown', (event) => {
	if (event.keyCode === 13) {
		addToDo();
	}
});
