const addBtn = document.querySelector('#addBtn');
const todoInput = document.querySelector('#todo-input');

const addToDo = () => {
	const todoInput = document.querySelector('#todo-input');
	const container = document.querySelector('#todo-container');

	if (todoInput.value) {
		let createdTodo = createToDoHtml(todoInput.value, container);
		container.prepend(createdTodo);
		todoInput.value = '';
	} else {
		alert('please enter your do to..!!!');
	}
};

function editTodo(input) {
	let editBtn = create(
		'button',
		'btn btn-outline-secondary bg-success text-white'
	);
	editBtn.innerHTML = 'EDIT';
	editBtn.setAttribute('type', 'button');
	editBtn.addEventListener('click', () => {
		if (editBtn.innerHTML === 'EDIT') {
			editBtn.innerHTML = 'UPDATE';
			input.removeAttribute('readonly');
		} else if (editBtn.innerHTML === 'UPDATE') {
			editBtn.innerHTML = 'EDIT';
			input.setAttribute('readonly', '');
		}
	});
	return editBtn;
}

function deleteTodo(container, todoDiv) {
	let deleteBtn = create(
		'button',
		'btn btn-outline-secondary bg-danger text-white'
	);
	deleteBtn.innerHTML = 'DELETE';
	deleteBtn.setAttribute('type', 'button');

	deleteBtn.addEventListener('click', () => {
		container.removeChild(todoDiv);
	});
	return deleteBtn;
}

const createToDoHtml = (userInput, container) => {
	let todoDiv = document.createElement('div');
	todoDiv.classList = 'pb-3 todo-item';

	let inputGroupDiv = document.createElement('div');
	inputGroupDiv.className = 'input-group';

	let input = create('input', 'form-control');
	input.setAttribute('readonly', '');
	input.setAttribute('placeholder', 'Enter your edited task');
	input.value = userInput;
	inputGroupDiv.appendChild(input);

	let editBtn = editTodo(input);
	inputGroupDiv.appendChild(editBtn);

	let deleteBtn = deleteTodo(container, todoDiv);
	inputGroupDiv.appendChild(deleteBtn);

	todoDiv.append(inputGroupDiv);

	return todoDiv;
};

function create(tag, className) {
	let createTag = document.createElement(tag);
	createTag.classList = className;

	return createTag;
}

addBtn.addEventListener('click', addToDo);
todoInput.addEventListener('keydown', (event) => {
	if (event.keyCode === 13) {
		addToDo();
	}
});
