const express = require('express')
const connectdb  = require('./config/connectdb')
const cors = require('cors')
require('dotenv').config()
console.log(process.env) 
const contactUsRoute = require('./routes/contactus');
const userRoutes = require('./routes/user')
const contactRouter = require('./routes/contact')
const app = express()
const port = process.env.PORT || 5000 
app.use(cors())
app.use(express.json())
app.use(contactUsRoute);
app.use('/api/user',contactRouter)
app.use('/auth',userRoutes)

connectdb()
app.listen(port,err=>{
err?console.log(err):console.log(`successfully connected to ${port}`)
})