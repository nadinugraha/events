
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const eventRegistration = require('./middlewares/eventRegistration');
const orders = require('./data/orders');
const emitter = require('./middlewares/emitter');
app.use(bodyParser.json());
app.use(eventRegistration);


app.post('/createorderwithevent', function(req,res){
    const { trxorder } = req.body;
    
    //a new order is saved to any database/storage e.g : mySQL, postgres, mongodb, etc. 
    orders.push(trxorder);
    
    
    emitter.emit('order_created', trxorder);
})

app.post('/createorderwithoutevent1', function(req,res){
    const { trxorder } = req.body;
    
    //a new order is saved to any database/storage e.g : mySQL, postgres, mongodb, etc. 
    orders.push(trxorder);
    
    
    emitter.emit('order-created', trxorder);
})


app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
        
    });
app.use((error,req,res,next)=> {
    res.status(error.status || 500);
    res.send({message : 'Error', error : error });
})

const server = app.listen(1339, function () {
    console.log('Express server listening on port ' + server.address().port);
});


