const express= require('express')
const http=require('http')
var fs=require("fs")
const app=express()
const path=require('path')

app.set('view engine','ejs')
app.use(express.static(__dirname + '/public/CSS'));
app.use(express.static(__dirname + '/public/java_script'));
app.use(express.static(__dirname + '/public/images'));
app.listen(3000)

app.get('/',(req,res)=>{
    fs.createReadStream(__dirname + "/public/HTML/index.html").pipe(res);
} )
app.get('/login2.html',(req,res)=>{
    fs.createReadStream(__dirname + "/public/HTML/login2.html").pipe(res);
} )
app.get('/project_cards.html',(req,res)=>{
    fs.createReadStream(__dirname + "/public/HTML/project_cards.html").pipe(res);
} )
