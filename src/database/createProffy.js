// logic of inserting data into the database


module.exports = async function(db, {proffyValue, classValue, classScheduleValue}) {
  //insert data into proffys table
  const insertedProffy = await db.run(`
    INSERT INTO proffys (
      name,
      avatar,
      whatsapp,
      bio
    ) VALUES (
      ${proffyValue.name},
      ${proffyValue.avatar},
      ${proffyValue.whatsaap},
      ${proffyValue.bio}
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
        ${classValue.subject},
        ${classValue.cost},
        ${proffy_id}
      );
  `)
  
  const class_id = insertedProffy.lastID;
  
}