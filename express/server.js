//you have to require express lib.
let express=require('express')
let app=express()
let PORT=8080
app.use(express.json())
//home page
app.get('/',(req,res)=>{
    console.log(req.method,'method')
    console.log(req.url,'url')
    console.log(req.baseUrl,'baseUrl')
    res.send('hwllo i am home')
})
app.get('/:id',(req,res)=>{
    console.log(req.params,'parms')
    res.send('hwllo i am home')
})
//about page
app.post('/about',(req,res)=>{
    console.log(req.body, "body")
    console.log(req.headers,'headers')
    console.log(req.query,'query')
    res.send('hwllo i am about')
})
 //server listen
 app.listen(PORT,()=>{
    console.log('connection done')
 })