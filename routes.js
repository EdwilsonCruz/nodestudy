const express = require('express');

const routes = new express.Router();
const requestTime = function timeLog(req, res, next) {
    console.log('Time: ',  Date.now());
    req.requestTime = Date.now();
    next();
}
routes.use(requestTime)
  
routes.get('/', function (req, res, next) {
   // res.json('Edwison & Bianca'); 
    //res.jsonp({user:'eddy'});  
  
    res.send({id:req.requestTime});
});

routes.get('/a', function (req, res, next) {
    //res.send('Edwison & Bianca'); 
    next();
}, function(req, res){ 
    res.send('Olá Bianca!');
});

routes.post('/post', function (req, res) {
    res.send('Obtive um post'); 
});

routes.delete('/del/:id/del', function (req, res) {    
    if (req.params.id != '' ) {
        res.send('Deletado');     
    }
    else{
        res.send('Errror');
    }
});

routes['copy']('/copy', function (req, res ) {
    res.send('E uma Copy');
})

routes.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...');
    res.send('all');
    next(); // pass control to the next handler
    
  });

//matriz function
var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
  }
  
  var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
  }
  
  var cb2 = function (req, res) {
    res.send('Hello from C!');
  }
  
  routes.get('/example/c', [cb0, cb1, cb2]);  
module.exports = routes;
