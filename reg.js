
const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();

const app = express();
app.use(express.static(__dirname));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "students"
});

// connect to the database
connection.connect(function(error){
    console.log("connected to the database successfully!")
});


app.get("/",(req,res) =>{
    res.sendFile(__dirname + "/index.html");
})

app.post("/",encoder, (req,res) =>{
    
    var username = req.body.username;
    var password = req.body.password;

    connection.query("insert into student values (?,?)",[username,password],function(error,results,fields){
        if (results.length = 0) {
            res.redirect("/"); 
        } else {
            res.redirect("/");
        }
        res.end();
    })
})

/*function loadres(){
    app.get("/",(req,res) =>{
        res.sendFile(__dirname + "/res.html");
    })
}*/