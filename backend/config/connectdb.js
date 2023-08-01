const mongoose = require('mongoose')

const connectdb=async()=>{
    try{
await mongoose.connect('mongodb+srv://contactlist:4ay9mSzaA6iqYsNk@cluster0.aidgufy.mongodb.net/?retryWrites=true&w=majority')
console.log('database successfully connected')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectdb


