let http=require('http')
let server=http.createServer((req,res)=>{
    if(req.url=="/" && req.method=="GET")
    {
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end('<h1>hii how are you </h1>')
    }
    else if (req.url=="/about" && req.method=="GET")
    {
        res.end("hello i am about page")
    }
    else if(req.url=="/contact")
    {
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write('<h1>hello contact page </h1>   <p>hello how ar3e you </p>')
        res.end()
    }
    else{
        res.writeHead(404,{"Content-Type":"text/plain"})
        res.end('page is not found')
    }
})
let PORT=8080
server.listen(PORT,()=>{
    console.log('server is up at 8080')
})