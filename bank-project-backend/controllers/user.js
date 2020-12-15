const db = require("../models");
const bcryptjs = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    password,
    
  } = req.body;
    console.log('firstname', firstname)
  if (!email) {
    return res.status(400).send({ error: "no email provided" });
  }

  const targetUser = await db.User.findOne({ where: { email } });

  if (targetUser) {
    console.log("err");
    res.status(400).send({ message: "User already taken" });
  } else {
    console.log("register");
    const salt = bcryptjs.genSaltSync(12);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    await db.User.create({
      firstname,
      lastname,
      email,

      password: hashedPassword,
      role: 0,
    });
    const newUser = await db.User.findOne({ where: { email } });
    // if (imageUrl) {
    //   await db.Photo.create({ imageUrl, user_id: newUser.id });
    // }
    // generating random likes
    //await generateBotLikes(newUser);
    res.status(201).send({ message: "User created" });
  }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const targetUser = await db.User.findOne({ where: { email } });
  
    if (targetUser) {
      if (bcryptjs.compareSync(password, targetUser.password)) {
        const token = jwt.sign(
          { id: targetUser.id, name: targetUser.name },
          "bankbanks",
          { expiresIn: 3600 }
        );
        res.status(200).send({ token});
      
      } else {
        res.status(400).send({ message: "Wrong password" });
      }
    } else {
      res.status(400).send({ message: "Not found account" });
    }
  };

module.exports = { register, login };
