const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    console.log("Server is up and running")
    res.setHeader("Content-Type","text/html");
    let path = "./Views/";
    switch(req.url){
        case '/':
            path += "index.html";
            res.statusCode = 200;
            break;
        case 'about':
            path += "about.html";
            res.statusCode = 200;
            break;
        case 'about1':
            res.statusCode = 301;
            console.log("Redirecting from ",res ,"to /about")
            res.setHeader("Location", "/about")
            res.end()
        default:
            path += "404.html";
            res.statusCode = 404;
            break;
    }
    fs.readFile(path, (err, data)=>{
        if (err) {
            console.log(err);
        }else{
            res.end(data)
        }
    })
})

server.listen(3000, 'localhost',()=>{
    console.log("Sina content!!")
})