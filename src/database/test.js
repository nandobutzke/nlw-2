const db = require('./db')
const Database = require('sqlite-async')

Database.then((db) => {
  //insert data

  proffy = {
    name: "Fernando Butzke",
    avatar: "https://avatars0.githubusercontent.com/u/63071834?s=460&u=0730fded6f6b5b22c5f3dfeb4b24fc42c4c19c0a&v=4",
    whatsapp: "47983421254",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
  }

  classValue = {
    subject: "Educação Física",
    cost: "20"
    //proffy id will come to database
  }

  classSchedule = [
    //class_id will come by database, after register the class
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]

  //consult data
})