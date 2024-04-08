let http = require('http')
let path = require('path')
let fs = require('fs')
let server = http.createServer((req, res) => {
    if (req.url == '/') {
        let homePath = path.join(__dirname, 'public/home.html')
        fs.readFile(homePath, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" })
                res.end("somthing wrong while reading")
            }
            else {
                res.writeHead(200, { "Content-Type": "text/html" })
                res.end(data)
            }
        })

    }
    else if (req.url == '/home.css') {
        let homecss = path.join(__dirname, 'public/css/home.css')
        console.log('hello home css', homecss)
        fs.readFile(homecss, 'utf-8', (err, data) => {
            if (err) {
                res.end("somthing wrong while reading")
            }
            else {
                res.end(data)
            }
        })
    }
    else if (req.url == '/img.avif') {
        let  imgcss = path.join(__dirname, 'public/assest/img.avif')
  
        fs.readFile(imgcss,(err, data) => {
            if (err) {
                res.end("somthing wrong while reading")
            }
            else {
                console.log(data)
                res.end(data)
            }
        })
    }
    else if (req.url == "/about") {
        let aboutPath = path.join(__dirname, 'public/about.html')
        fs.readFile(aboutPath, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" })
                res.end("somthing wrong while reading")
            }
            else {
                res.writeHead(200, { "Content-Type": "text/html" })
                res.end(data)
            }
        })
    }

    else if (req.url == "/contact") {
        let aboutPath = path.join(__dirname, 'public/contact.html')
        fs.readFile(aboutPath, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" })
                res.end("somthing wrong while reading")
            }
            else {
                res.writeHead(200, { "Content-Type": "text/html" })
                res.end(data)
            }
        })
    }
    else {
        let aboutPath = path.join(__dirname, 'public/404.html')
        fs.readFile(aboutPath, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" })
                res.end("somthing wrong while reading")
            }
            else {
                res.writeHead(200, { "Content-Type": "text/html" })
                res.end(data)
            }
        })
    }

})
server.listen(8080, () => {
    console.log('done')
})