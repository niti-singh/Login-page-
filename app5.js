const express = require("express");
const  fs = require("fs");
const path = require("path");
const app = express();
const port = 80;

//this is used for serving static files 
app.use('/static',express.static('static'))
app.use(express.urlencoded())

//this is used as temeplate engine in pug
app.set('view engine','pug')

//set this as viws directory
app.set('views', path.join(__dirname,'Template'))

//calling demo endpoint
app.get("/login", (req,res)=>{
    res.render('login');
})
app.post('/',(req,res)=>{
    name = req.body.name
    password = req.body.password
    age = req.body.age
    address = req.body.address

    let outputToWrite = `the Name of the student is ${name},${age},${password},${address}`
    fs.writeFileSync('output.txt',outputToWrite)
    const pro ={"message":"succsesfuly Sbumited"}
    res.status(200).render('login.pug',pro);
});

app.listen(port, ()=>{
    console.log(`the application started successfully on port ${port}`)
});