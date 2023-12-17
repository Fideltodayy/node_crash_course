const express = require('express')

const app = express(console.log("Server is up and running"));

app.listen(3000);

app.get('/', (req,res)=>{
    console.log("Serving the Home page")
    res.sendFile("./Views/index.html", { root: __dirname })
})
app.get('/about', (req,res)=>{
    res.sendFile("./Views/about.html", { root: __dirname })
})
app.get('/about_me', (req,res)=>{
    console.log("Redirecting from ",req.url ,"to /about")
    res.redirect('./about')
})
app.use((req,res)=>{
    res.status(404).sendFile("./Views/404.html", { root: __dirname })
})
