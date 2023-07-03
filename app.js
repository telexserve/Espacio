require('dotenv').config()
var env = process.env
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine','ejs')


app.get('/',(req,res) => {res.render(__dirname + '/views/index.ejs')})
app.get('/Admin',(req,res) => {res.render(__dirname + '/views/auth/login/login.ejs')})
app.get('/Edit',(req,res) => {res.sendFile(__dirname + '/views/tmp/index.html')})



app.post('/Auth',(req,res) => {
    var username = req.body.usuario
    var password = req.body.clave
    if(username == "admin" && password == "root") {res.render(__dirname + '/views/app/app.ejs')}
})



app.listen(env.port)