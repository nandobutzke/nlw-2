const subjects = [
  "Industrial",
  "De estruturas",
  "De automóveis",
  "Pesada",
  "De usinas",
  "De bordo",
  "De voo",
  "De manutenção de aeronaves"
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado"
]

//Transform text in number (subjects)
function getSubject(subjectNumber) {
  const arrayPosition = +subjectNumber - 1;
  return subjects[arrayPosition]
}

function convertHoursToMinutes(time) {
  const [hour, minutes] = time.split(":")
  
  return Number((hour * 60) + minutes)
}

module.exports = {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes
}