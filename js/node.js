const express = require("express");
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


