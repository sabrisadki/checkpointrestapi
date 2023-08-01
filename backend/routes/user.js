const express = require('express');
const UserShcema = require('../model/user')
const userRoutes = express.Router()
const {test,login,register}=require('../controllers/user')
const {registerValidation,logvalidator,validation}= require('../middelware/RegisterValidator')
const {isAuth} = require('../middelware/isAuth')

userRoutes.get('/',test)
//partie authentification 
userRoutes.post('/register',registerValidation,validation,register)
//login 
userRoutes.post('/login',logvalidator,validation,login)
userRoutes.get('/alluser',async(req,res)=>{
try{
const getall = await UserShcema.find()
res.send(getall)
}catch(err){
console.log(err)
}
})
//route ely tjibli el user speciifique ely 3ndou token 
userRoutes.get('/usraccount',isAuth,(req,res)=>{
    res.send(req.user)
})
module.exports = userRoutes