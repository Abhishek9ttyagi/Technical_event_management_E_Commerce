const mongoose = require("mongoose")


async function connectDB(){
    try{
        await mongoose.connect('mongodb+srv://abhishektyagi9875:r38utC1hCMVLBWu7@cluster0.4szbkjb.mongodb.net/?retryWrites=true&w=majority')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB

