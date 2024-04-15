//you have to require express lib.
let express=require('express')
let app=express()
let PORT=8080
let path=require('path')
app.use(express.json())
//home page
// app.get('/',(req,res)=>{
//     // console.log(req.method,'method')
//     // console.log(req.url,'url')
//     // console.log(req.baseUrl,'baseUrl')
//     // res.send('hwllo i am home')
//     //this is response object
//     //console.log(res)
//            //res.end
//    // res.end('<h1>hello how are you</h1>')
//         //res.write()
//     // res.write('<h1>hello</h1>')
//     // res.write('<h1>how are you</h1>')
//     // res.end()

//          //res.send()
//     // res.send([{name:"utsav"}])
//    // res.set({"Content-Type":"text/plain"}) 
//    // res.status(201).send('hown are you')
//    res.json(null)
    
    
// })
// app.get('/:id',(req,res)=>{
//     console.log(req.params,'parms')
//     res.send('hwllo i am home')
// })
//about page
// app.post('/about',(req,res)=>{
//     console.log(req.body, "body")
//     console.log(req.headers,'headers')
//     console.log(req.query,'query')
//     res.send('hwllo i am about')
// })
// app.post('/logout',(req,res)=>{
//   let {email,pass} = req.body
//   if(email=="utsav@gmail.com" && pass=="123")
//   {
//     res.redirect(301,'/login')
//   }
//   else{
//     res.send("somthing wrong")
//   }
// })
// app.get('/login',(req,res)=>{
//     res.send("<h1>hello this is my login page </h1>")
// })
// app.get('/book',(req,res)=>{
//     let url=path.join(__dirname,'Wings of Fire - Google Books.pdf')
//     res.sendFile(url)
// })

   app.get('/',(req,res)=>{
    res.send("hello i am home page")
   })
   app.get('/login',(req,res)=>{
    let token="hellohowareyouandiamfromdelhi"
    res.cookie('auth',token,{httpOnly:true,expire:1000 })
    res.send('login successfully')
   })
   app.get('/logout',(req,res)=>{
    res.clearCookie('auth')
    res.send("logout done")
   })
 //server listen
 app.listen(PORT,()=>{
    console.log('connection done')
 })