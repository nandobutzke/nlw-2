document.querySelector("#add-time")
.addEventListener('click', cloneField);

function cloneField() {
  const newCloneField = document.querySelector('.schedule-item').cloneNode(true); //Irá clonar o conteúdo da id

  const fields = newCloneField.querySelectorAll('input');

  // para cada item, limpe os inputs
  fields.forEach(fieldValue => {
    fieldValue.value = "";
  });

  const scheduleElements = document.querySelector('#schedule-items');
  scheduleElements.appendChild(newCloneField);
}