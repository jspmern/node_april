let express=require('express')
let rootroute=require('./routes/route')
let app=express()
 //application level middlware
// app.use((req,res,next)=>{
//     if(req.body.name=="utsav")
//     {
//         next()
//     }
//     else{
//         res.send('you are not authorized user')
//     }
// })
//route level middlware
//app.use(rootroute)
//error level middlware
app.use((err,req,res,next)=>{
    if(err)
    {
        res.send(err.message)
    }
    else{
        next()
    }
}) 
app.get('/',(req,res)=>{
    try{
        throw new Error('hello i am error')
    }
    catch(err)
    {
        throw new Error({message:'home error',status:404})
    }
})
app.get('/home',(req,res)=>{
    try{
         res.send('hello i am home ')
    }
    catch(err)
    {
        throw new Error('hello i am error')
    }
})
app.get('/about',(req,res)=>{
    try{
         res.send('hello i am about ')
    }
    catch(err)
    {
        throw new Error('hello i am error')
    }
})
 
app.listen(8080,()=>{
    console.log('connected')
})