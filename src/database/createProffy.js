// logic of inserting data into the database


module.exports = async function(db, {proffyValue, classValue, classScheduleValues}) {
  //insert data into proffys table
  const insertedProffy = await db.run(`
    INSERT INTO proffys (
      name,
      avatar,
      whatsapp,
      bio
    ) VALUES (
      "${proffyValue.name}",
      "${proffyValue.avatar}",
      "${proffyValue.whatsaap}",
      "${proffyValue.bio}"
    );
  `)
    
  const proffy_id = insertedProffy.lastID

  //Insert data on table classes

  const insertedClass = await db.run(`
      INSERT INTO classes (
        subject,
        cost,
        proffy_id
      ) VALUES (
        "${classValue.subject}",
        "${classValue.cost}",
        "${proffy_id}"
      );
  `)
  
  const class_id = insertedClass.lastID;

  //insert data into class_schedule table

  const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
    return db.run(`
      INSERT INTO class_schedule (
        class_id,
        weekday,
        time_from,
        time_to
      ) VALUES (
        "${class_id}",
        "${classScheduleValue.weekday}",
        "${classScheduleValue.time_from}",
        "${classScheduleValue.time_to}"
      );
    `)
  })

  //Execute all db.runs() of class_schedules
  await Promise.all(insertedAllClassScheduleValues)
}