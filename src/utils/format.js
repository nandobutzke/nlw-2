const subjects = [
  "Mecânico Industrial",
  "Mecânico de Estruturas",
  "Mecânico de Automóveis",
  "Mecânica Pesada",
  "Mecânico de Usinas",
  "Mecânico de Bordo",
  "Mecânico de Voo",
  "Mecânico de Manutenção de Aeronaves"
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