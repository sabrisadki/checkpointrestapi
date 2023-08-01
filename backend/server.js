const express = require('express')
const connectdb  = require('./config/connectdb')
var cors = require('cors')
const userRoutes = require('./routes/user')
const app = express()
const contactRouter = require('./routes/contact')
const port = 5001 
app.use(cors())
app.use(express.json())
connectdb()
app.use('/api/user',contactRouter)
app.use('/auth',userRoutes)
app.listen(port,err=>{
    err?console.log(err):console.log(`successfully connected to ${port}`)
})