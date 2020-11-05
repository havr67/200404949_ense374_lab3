const express = require("express");
mongoose = require("mongoose"), 
passport = require("passport"), 
bodyParser = require("body-parser"), 
LocalStrategy = require("passport-local");
const app = express();
var fs = require('fs');
const { Http2ServerRequest } = require("http2");
 
 
const port= 3000;
 
app.listen(port,function(){
console.log("Server is running on port" +port);
});
 

    
var datauser= fs.readFileSync('users.json');
 
var datatask= fs.readFileSync('task.json');

var dataloginuser= fs.readFileSync('dataloginuser.json');

var dataregistrateduser= fs.readFileSync('dataregistrateduser.json');
 
var Users = JSON.parse(json/datauser);

var Tasks = JSON.parse(json/datatask);

var LoginUser = JSON.parse(json/dataloginuser);

var RegisterUser = JSON.parse(json/dataregistrateduser);

var AddTask = JSON.parse(json/addtask);

var Claim = JSON.parse(json/Claim);

var Unfinish = JSON.parse(json/Unfinish);

var Purge = JSON.parse(json/Purge);

var AbandonorComplete = JSON.parse(json/AbandonorComplete);


pm.enviroment.set("username", dataregistrateduser.username);
 
console.log(Users);
 
console.log(Tasks);
 
app.get('/User', user); 
 
function user(req, res)
{
    res.send(Users);
} 
 
app.get('/Tasks', tasklist); 
 
function tasklist(req, res)
{
    res.send(Tasks);
} 

app.get('/login', login);

function login(req, res){
    res.send(Login);
}

app.post("/login", dataloginuser.authenticate("Users", { 
    successRedirect: "/todo", 
    failureRedirect: "/login"
}), function (req, res) { 
}); 

app.post("/register", function (req, res) { 
    var username = req.body.username 
    var password = req.body.password 
    User.register(new User({ username: username }), 
            password, function (err, user) { 
        if (err) { 
            console.log(err); 
            return res.render("register"); 
        } 
    }); 
}); 

app.post("/register", dataregistrateduser.authenticate("Users", { 
    successRedirect: "/todo", 
    failureRedirect: "/register"
}), function (req, res) { 
}); 

app.get("/logout", function (req, res) { 
    req.logout(); 
    res.redirect("/"); 
}); 


app.get("/addtask", function (req, res) { 
    req.addtask(); 
    res.redirect("/todo"); 
}); 

app.get("/claim", function (req, res) { 
    req.claim(); 
    res.redirect("/todo"); 
}); 

app.get("/abandonorcomplete", function (req, res) { 
    req.abandonorcomplete(); 
    res.redirect("/todo"); 
}); 

app.get("/unfinish", function (req, res) { 
    req.unfinish(); 
    res.redirect("/todo"); 
}); 

app.get("/purge", function (req, res) { 
    req.purge(); 
    res.redirect("/todo"); 
}); 
