let express=require('express')
let app=express()
//application level middleware
app.set('view engine','ejs')
let name='utsav'
let company=['abc','xyz','pqr'] 
app.get('/',(req,res)=>{
     res.render('pages/home.ejs',{name:name,company:company}) 
})
app.get('/about',(req,res)=>{
    res.render('pages/about.ejs',{login:false}) 
})
app.get('/service',(req,res)=>{
    res.render('pages/service.ejs') 
})
app.listen(8080,()=>{
    console.log('i am up')
})