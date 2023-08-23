
////////////////////////////////////  WITH COMPASS ///////////////////////////////////////////


// const mongoose=require("mongoose")

// mongoose.connect("mongodb://127.0.0.1:27017/houserent")
// .then( ()=>{
//     console.log("mongodb connected");
// })

// .catch((e)=>{
//     console.log("failed to connect");
// })


////////////////////////////////////  WITH ATLAS ///////////////////////////////////////////

const mongoose = require('mongoose');

const url = 'mongodb+srv://suyash0508:suyash0508@cluster0.icf6e7z.mongodb.net/signupmongo'
mongoose.connect(url).then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log("failed to connect" + err);
})


const newSchema=new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
})



const collection=new mongoose.model("collection",newSchema)

module.exports=collection;