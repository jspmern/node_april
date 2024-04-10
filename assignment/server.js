let http=require('http')
let fs=require('fs')
let path=require('path')
let server=http.createServer((req,res)=>{
    let tempPath=path.join(__dirname,'public/index.html')
    let dbPath=path.join(__dirname,'db/db.json')
    //this route is for rendering index.html page
    if(req.url=="/" && req.method=="GET")
    {
        res.writeHead(200,{"Content-Type":"text/html"})
        fs.readFile(tempPath,'utf-8',(err,data)=>{
            if(err)
            {
                res.writeHead(500,{"Content-Type":"text/plain"})
                res.end("somthing wrong !")
            }
            else{
                res.end(data)
            }
        })
    }
    else if(req.url=='/' && req.method=="POST")
    {
        let str=''
        req.on('data',(chunk)=>{
           str +=chunk
        })
        req.on('end',()=>{
            let obj={
                id:Math.trunc(Math.random()*10000),
                text:JSON.parse(str)
            }
            fs.readFile(dbPath,'utf-8',(err,data)=>{
                if(err)
                {
                    res.writeHead(500,{"Content-Type":"text/plain"})
                    res.end("smthing wrong")
                }
                else{
                         let updataedData=JSON.parse(data)   
                         let newData=[obj,...updataedData]
                         fs.writeFile(dbPath,JSON.stringify(newData),(err)=>{
                            if(err)
                            {
                                res.writeHead(500,{"Content-Type":"text/plain"})
                                res.end("smthing wrong")  
                            }
                            else{
                                res.writeHead(200,{"Content-Type":"application/json"})
                                res.end(JSON.stringify(newData))
                            }
                         }) 
                }
            })
            
        })
  
    }
})
server.listen(8000,()=>{
    console.log('server is up at 8000')
})