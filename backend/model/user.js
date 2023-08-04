const mongoose = require ('mongoose')
const UserShcema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"user"
    }
    
    
})

module.exports = mongoose.model('usersamdin',UserShcema);