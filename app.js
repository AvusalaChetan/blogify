require("dotenv").config()
const express = require('express')
const app = express()

const port = process.env.PORT || 3000

const path = require('path')
const cookieParser = require('cookie-parser')
const {checkForAuthenticationCookie} = require('./middlewares/authentication')
require('./config/connection'); 
const blogModel = require('./models/blogModel')

// Add rate limiter
const rateLimit = require('express-rate-limit')
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, 
  max: 100,
  message: 'Too many requests, please try again later.',
})
app.use(limiter)

//mw
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'));
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(cookieParser())
app.use(checkForAuthenticationCookie("token"))

// This middleware sets res.locals.user
app.use((req, res, next) => {
  res.locals.user = req.user;  
  next();
});

// router 
const userRouter = require('./routers/user')
const blogRouter = require('./routers/blog')
// router middleware
app.use('/user',userRouter)
app.use('/blog',blogRouter)

app.get('/', async (req, res) => {
  try {
    const allBlogs = await blogModel.find({}).populate('createdBy')
    res.render('home', {
      user: req.user,
      blogs: allBlogs
    })
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).send('Server Error');
  }
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
