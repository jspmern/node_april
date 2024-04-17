let express=require('express')
let app=express()
let path=require('path')
//build in middlware
app.use(express.json())
app.use(express.static('public'))
//route
app.get('/',(req,res)=>{
     let tempPath=path.join(__dirname,'public/index.html')
     res.sendFile(tempPath)
})
 
app.listen(8080,()=>{
    console.log('connected at 8080')
})