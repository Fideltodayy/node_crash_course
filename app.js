const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blogs')

const app = express(console.log("Server is up and running"));

const dbURI = 'mongodb+srv://fideltodayy:QWERTYUIOP@blogsapp.skehwro.mongodb.net/Blogsapp?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err)=> console.log(err));

app.set('view engine', 'ejs');

// Middleware and static files

app.use(express.static('public'));

// app.use((req,res,next)=>{
//     console.log("New request made!!")
//     console.log("Host:",req.hostname)
//     console.log("Path:",req.path)
//     console.log("Method:", req.method)
//     next()
// })
 app.use(morgan('tiny'))

app.get('/', (req,res)=>{
    res.redirect('/blogs')
})
// app.use((req,res)=>{
//     console.log("In the next middleware")
// })
app.get('/about', (req,res)=>{
    res.render("about",{title: "About"})
})

app.get('/blogs',(req,res)=>{
    Blog.find().sort({ createdAt: -1})
        .then((results)=>{
            res.render('index', {title: 'All Blogs', blogs: results})
        })
        .catch((err)=>{
            console.log(err)
        })
})

app.get('/blogs/create', (req,res)=>{
    res.render("create",{title: "Create Blog"})
})
app.get('/about_me', (req,res)=>{
    console.log("Redirecting from ",req.url ,"to /about")
    res.redirect('about')
})
app.use((req,res)=>{
    res.status(404).render("404",{title: "404"});
})
