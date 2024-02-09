const container = document.querySelector('#container__tasks');
const inputTask = document.querySelector('#register__text');

function createCard(task) {
  const card = document.createElement('div');
  card.classList.add('task');
  container.appendChild(card);

  const text = document.createElement('p');
  text.textContent = task;

  const button = document.createElement('button');
  button.textContent = 'excluir';
  button.onclick = function() {
    card.remove();
  }

  card.append(text, button);
}

function buttonCreate() {
  if (!inputTask.value) {
    return;
  } else {
    createCard(inputTask.value);
    inputTask.value = '';
  }
}

inputTask.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    buttonCreate();
  }
})