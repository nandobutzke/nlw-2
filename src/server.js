const proffys = [
  {
    name: "Fernando Butzke",
    avatar: "https://avatars0.githubusercontent.com/u/63071834?s=460&u=0730fded6f6b5b22c5f3dfeb4b24fc42c4c19c0a&v=4",
    whatsapp: "47983421254",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Educação Física",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220]
  },
  {
    name: "Ander Felipe",
    avatar: "https://avatars0.githubusercontent.com/u/63071834?s=460&u=0730fded6f6b5b22c5f3dfeb4b24fc42c4c19c0a&v=4",
    whatsapp: "47983421254",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20",
    weekday: [1],
    time_from: [720],
    time_to: [1220]
  }
]

const subjects = [
  "Artes",
  "Biologia",
  "Ciência",
  "Educação Física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química"
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

function pageLanding(req, res) {
  return res.render("index.html");
}

function pageStudy(req, res) {
  const filters = req.query;
  return res.render("study.html", { proffys, filters, subjects, weekdays });     //Adding new object to study.html
}

function pageGiveClasses(req, res) {
  const data = req.query;
  
  
  //verify if keys = []
  const isNotEmpty = Object.keys(data).length > 0;

  if (isNotEmpty) {

    data.subject = getSubject(data.subject)
    //add data to list of proffys
    proffys.push(data);

    return res.redirect("/study")
  }

  //else show the page
  return res.render("give-classes.html", {subjects, weekdays});
}

//Server
const express = require('express');
const server = express();


//nunjucks config
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
});


server
  //configuring static archives (styles, scripts)
  .use(express.static("public"))                //public content
  //application routes
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  //Start server
  .listen(5000);