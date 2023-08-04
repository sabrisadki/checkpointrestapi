const mongoose = require('mongoose')

const connectdb=async()=>{
try{
await mongoose.connect(process.env.DB)
console.log('database successfully connected')
}catch(err){
    console.log(err)
}
}
module.exports = connectdb