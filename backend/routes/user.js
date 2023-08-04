const express = require('express');
const userRoutes = express.Router()
const {test,login,register, getallc}=require('../controllers/user')
const {registerValidation,logvalidator,validation}= require('../middelware/RegisterValidator')
const {isAuth} = require('../middelware/isAuth')

userRoutes.get('/',test)
userRoutes.post('/register',registerValidation,validation,register)
userRoutes.post('/login',logvalidator,validation,login)
userRoutes.get('/alluser',getallc)
userRoutes.get('/usraccount',isAuth,(req,res)=>{ res.send(req.user) })

module.exports = userRoutes