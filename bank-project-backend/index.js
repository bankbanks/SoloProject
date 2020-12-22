require('dotenv').config()
const express = require("express")
const app = express()
const db = require('./models')
const userRoutes = require ('./routes/user')
const tutorRoutes = require ('./routes/tutor')
const cors = require('cors')
const cloudinaryRoutes = require('./routes/cloudinary');



app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use('/users', userRoutes)
app.use('/tutors', tutorRoutes)
app.use('/upload', cloudinaryRoutes);
app.listen(process.env.PORT, () => {

    console.log(`server is running at port: ${process.env.Port}`)
})

db.sequelize.sync({force : false}).then(() => console.log(`runing ${process.env.PORT}`))