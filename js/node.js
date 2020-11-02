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

if(Users.hasOwnProperty("username", "password")){
    console.log("user exist");
}else{
    console.log("user doesn't exist");

}




Array.prototype.containsObjectwithUser = function(username, password){
    return !this.filter(function(us){
        return us.hasOwnProperty("username", "password") && us.username == username && us.password == password
    }).length;
}

var xhr = new HttpRequestlogin();

xhr.open("POST", '/login', true);

var xhq = new HttpRequestregister();

xhq.open("POST", '/register', true);




function cheackUsers (event){

    usercheck = LoginUser.Users[0].username;
    
    passwordcheck = LoginUser.Users[1].password;

    if (usercheck != 

}



