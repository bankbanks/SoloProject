const db = require("../models");

const tutor = async (req, res) => {
  const { pages, size } = req.query;

  if (pages && size) {
    const offset = (Number(pages) - 1) * Number(size);
    const limit = Number(size);
    
    try {
      const tutors = await db.Tutor.findAll({
        limit: limit,
        offset: offset,
      });
      res.status(200).send(tutors);
    } catch {
      console.log(err);
      res.status(500).send({ message: err.message });
    }
  } else {
    try {
      const allTutor = await db.Tutor.findAll();
      res.status(200).send(allTutor);
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: err.message });
    }
  }
};

// const scienceSubject = async (req, res) => {
//   try {
//     const oneSubject = await db.Tutor.findOne({ where: { id: 1 } });
//     res.send();
//   } catch (err) {}
// };

const addTutor = async (req, res) => {
  try {
    const {
      fname,
      lname,
      email,
      available,
      tel,
      subject,
      location,
      line_contact,
      facebook_contact,
      graduate,
      detail,
      img
    } = req.body;

    console.log("POLL LAAA");

    await db.Tutor.create({
      fname,
      lname,
      email,
      available,
      tel,
      subject,
      location,
      line_contact,
      facebook_contact,
      graduate,
      detail,
      img
    });

    res.status(201).send({ message: "created" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};

module.exports = { tutor, addTutor };
