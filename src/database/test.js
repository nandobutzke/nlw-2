const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
  //insert data

  proffyValue = {
    name: "Fernando Butzke",
    avatar: "https://avatars0.githubusercontent.com/u/63071834?s=460&u=0730fded6f6b5b22c5f3dfeb4b24fc42c4c19c0a&v=4",
    whatsapp: "47983421254",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
  }

  classValue = {
    subject: 4,
    cost: "20"
    //proffy id will come to database
  }

  classScheduleValues = [
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

  await createProffy(db, {proffyValue, classValue, classScheduleValues})

  //consult data

  const selectedProffys = await db.all("SELECT * FROM proffys");
  //console.log(selectedProffys);

  //Select classes and proffys

  const selectedAllClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `)

  console.log(selectedAllClassesAndProffys)

  //8h <= horário < 18h

  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = 1
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "520" 
  `)

  console.log(selectClassesSchedules)




})