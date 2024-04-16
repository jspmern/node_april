let express=require('express')
let route = express.Router()
route.get('/',(req,res)=>{
    res.send("i am root end point")
})
route.get('/about',(req,res)=>{
    res.send("hi i am about page")
})
route.get('/home',(req,res)=>{
    res.send("hi i am about page")
}
)
// route.get('/contact',(req,res)=>{
    
//     res.send("hi i am contact page with get")
// })
// route.post('/contact',(req,res)=>{
    
//     res.send("hii i am contact page with post")
// })
// route.delete('/contact',(req,res)=>{
    
//     res.send("hi i am contact page with delete")
// }
// )
route.all('/contact',(req,res)=>{
    res.send("hii i am able to understand get,post,delete,patch,put,head")
})
module.exports=route