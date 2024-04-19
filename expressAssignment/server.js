let express=require('express')
let app=express();
let route=require('./routes/route')
let dotenv=require('dotenv')

//env middlwate
dotenv.config()
let PORT=process.env.PORT || 5000
 
//built in middlware
app.use(express.json())
app.use(express.static('public'))
//router level middlware
app.use(route)
//this is my error level middlware
app.use((err,req,res,next)=>{
    if(err)
    {
     return  res.status(500).send({message:err.message})
    }
    else{
        next()
    }
})

//this is for the listen
app.listen(PORT,()=>{
    console.log(`server is connected at http://localhost:${PORT}`)
})