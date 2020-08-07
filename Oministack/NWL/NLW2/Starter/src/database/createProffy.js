module.exports = function(db, {proffyValue, classValue, classSheculeValue}){
    // inserir dados na table de proffys
    const InsertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            ${proffyValue.name},
            ${proffyValue.avatar},
            ${proffyValue.whatsapp},
            ${proffyValue.bio}
        )
    
    `);

    // inserir dados na table de classSchedule
}