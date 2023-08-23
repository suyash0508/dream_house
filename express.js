const express=require("express")
const collection = require("./mongodb")  // connecting mongodb to express
const cors=require("cors")
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


app.get('/',cors(),(req,res)=>{
   
})



 app.post("/",async (req,res)=>
 {
  const {Username,Password}=req.body      


try{
  const check=await collection.findOne({Username:Username})

  if(check){
    res.json("exist")
  }
  else{
    res.json("notexist")
  }
}

catch{(e)
     res.json("notexist")
}

})




app.post("/signup",async (req,res)=>{

  const {Username,Password}=req.body    
  
  const data={
    Username:Username,
    Password:Password
  }


 try{
  const check=await collection.findOne({Username:Username})

  if(check){
    res.json("exist")
  }
  else{
    res.json("notexist")
    await collection.insertMany([data])
  }
}

catch{(e)
     res.json("notexist")
}

})



app.listen(5000,(req,res)=>{
    console.log("Port Connected");
})
