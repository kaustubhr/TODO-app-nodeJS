var bodyParser = require('body-parser');
var data = [{item: 'Keep Drinking Water' }, {item: 'Complete Nodejs app'}, {item: 'Jog'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});
module.exports = function(app){
//set up all of request handlers

app.get('/todo',function(req,res){
    res.render('todo',{todos: data});

});

app.post('/todo',urlencodedParser,function(req,res){
    data.push(req.body);
    res.render('todo', {todos: data});
    res.json({todos: data});  
});

app.delete('/todo/:item',function(req,res){
    data = data.filter(function(todo)
    {
        return todo.item.replace(/ /g,'-') !== req.params.item;
    });
    res.json(data);
    
});

};