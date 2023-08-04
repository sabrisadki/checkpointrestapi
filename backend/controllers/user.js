const UserShcema = require('../model/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

exports.test=(req,res)=>{
try{
res.send('test controllers ')
}catch(err){
console.log(err)
}
}
exports.register=async(req,res)=>{
try{
const {name,email,password}=req.body

const found = await UserShcema.findOne({email})
if(found){return res.status(404).json({msg:'vous avez deja un compte voir le login'})}

const newUser = await new UserShcema(req.body)
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(password, salt);

newUser.password = hash
const payload = { id : newUser._id}
var token = jwt.sign(payload,process.env.privateKey )
newUser.save()
res.status(200).send({msg:'welcome to the groupe ', newUser,token})
}
catch(err)  {  console.log(err),res.send({msg:'error'})  }
}

exports.login=async (req,res)=>{
try{
const {email,password} = req.body 
const found = await UserShcema.findOne({email})
if(!found){return res.status(404).json({msg:'invalid email'})}
const match = await bcrypt.compare(password, found.password)
if(!match){return res.status(404).json({msg:'error partie mdp'})}
const payload = { id : found._id}
var token = jwt.sign(payload,process.env.privateKey )
res.status(200).send({msg:'ur welcome',token , found})
}
catch(err){   console.log(err)   }
}

exports.getallc=async(req,res)=>{
try{
const getall = await UserShcema.find()
res.send(getall)
}
catch(err){   console.log(err)     }
};