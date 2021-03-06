const addBtn = document.querySelector('#addBtn');
const userInput = document.querySelector('#todo-input');
const container = document.querySelector('#todo-container');

const addToDo = () => {
	if (userInput.value) {
		let createdTodo = createToDoHtml(userInput.value, container);
		container.prepend(createdTodo);
		userInput.value = '';
	} else {
		alert('please enter your do to..!!!');
	}
};

const editTodo = (input) => {
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

	input.addEventListener('keydown', (event) => {
		if (event.keyCode === 13 && editBtn.innerHTML === 'UPDATE') {
			editBtn.innerHTML = 'EDIT';
			input.setAttribute('readonly', '');
		}
	});
	return editBtn;
};

const deleteTodo = (container, todoDiv) => {
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
};

const createToDoHtml = (userInput, container) => {
	let todoDiv = create('div', 'pb-3 todo-item');
	let inputGroupDiv = create('div', 'input-group');

	let input = create('input', 'form-control');
	input.setAttribute('readonly', '');
	input.setAttribute('placeholder', 'Edit your to-do');
	input.value = userInput;
	inputGroupDiv.appendChild(input);

	let editBtn = editTodo(input);
	inputGroupDiv.appendChild(editBtn);

	let deleteBtn = deleteTodo(container, todoDiv);
	inputGroupDiv.appendChild(deleteBtn);

	todoDiv.append(inputGroupDiv);

	return todoDiv;
};

const create = (tag, className) => {
	let createTag = document.createElement(tag);
	createTag.classList = className;

	return createTag;
};

addBtn.addEventListener('click', addToDo);
userInput.addEventListener('keydown', (event) => {
	if (event.keyCode === 13) {
		addToDo();
	}
});
