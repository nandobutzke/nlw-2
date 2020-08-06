document.querySelector("#add-time")
.addEventListener('click', cloneField);

function cloneField() {
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true); //Irá clonar o conteúdo da id
  
  const fields = newFieldContainer.querySelectorAll('input');

  fields.forEach(function(fieldValue) {
    fieldValue.value = "";
  })

  document.querySelector('#schedule-items').appendChild(newFieldContainer);
}