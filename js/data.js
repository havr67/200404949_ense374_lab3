var user = function ( username, password){

this.username = username;
this.password = password;
};

for (let users in user) {
let users = user[username];
document.write(users.username + ' ' + users.password + ' ');
};

let users = [
{ username: 'user1',
Password: 'pass123' },
{ username: 'user2',
password: 'pass1233' };
];

var task = function ( id, name, owner, creator, done, cleared){

this.id = id;
this.name = name;
this.owner = owner;
this.creator = creator;
this.done = done;
this.cleared = cleared;
};

for (let tasks in task) {
let tasks = task[id];
document.write(users.id + ' ' + users.name + ' ' + users.owner + ' ' + users.creator + ' ' + users.done + ' ' + users.cleared + ' ');
};

let tasks = [
{id: 1,
name: "My finished task",
owner: 'user1',
creator: 'nikita',
done: '0',
cleared: '1' },
{id: 2,
name: "lmoooa ",
owner: 'user1',
creator: 'nikita',
done: '1',
cleared: '1' },
{id: 3,
name: "My finished task",
owner: 'user2',
creator: 'nikita',
done: '1',
cleared: '1' },
{id: 4,
name: "My finished task",
owner: 'user2',
creator: 'nikita',
done: '0',
cleared: '1' },
{id: 5,
name: "My task",
owner: '',
creator: '',
done: '0',
cleared: '1' },
];

const fs = require("fs")
var userjson = JSON.strigify{user};
fs.writefilesync{__dirname+"/objects.json",userjson,"utf8",
function(){
  if(err){
  console.log(err);
  }}};



  function isJson(str) {
    try {
        JSON.login(str);
    } catch (e) {
        return false;
    }
    return true;
}