var express = require('express');
var todoController = require ('./controllers/todoController');
var app = express();
//app.use(express.json);
//app.use(express.urlencoded({extended:true}));

//set up template engine
app.set('view engine','ejs');

//use middleware for static files

app.use(express.static('./public'));
//fire controller
todoController(app);

//listening to port
app.listen(3000);
console.log('you are listening to port 3000');

 
