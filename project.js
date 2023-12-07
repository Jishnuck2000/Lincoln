const express = require('express')
const project = express()
const mongoose =require('mongoose')
const multer=require('multer')
const lincolnroutes = require('./routes/lincolnroutes')
const dummyroutes = require('./routes/dummyroutes')

mongoose.connect('mongodb+srv://jeochirrakkal26:LMYhe02nrilF3slT@lincoln.i9cra1q.mongodb.net/Dummy',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('database connected')

}).catch((error)=>{
    console.log(error)

})

project.use(express.json())
project.use(express.urlencoded({extended:true}))

project.set('view engine','ejs')
project.use(express.static('./public'))

const upload = multer({dest:'/public/image'})

project.use('/api/lincoln',lincolnroutes)


project.use('/api/Dummy',dummyroutes)


project.get('/project',(req,res)=>{
    res.render('project')
})
project.get('/logo',(req,res)=>{
    res.render('logo')
})
project.get('/table',(req,res)=>{
    res.render('table')
})
project.get('/add',(req,res)=>{
    res.render('add')
})
project.get('/update',(req,res)=>{
    res.render('update')
})
// project.get('/vh',(req,res)=>{
//     res.render('vh')
// })
project.get('/viewone',(req,res)=>{
    res.render('viewone')
})

const port = 1500;
project.listen(port,() =>{
console.log(`created: ${port}`)
});