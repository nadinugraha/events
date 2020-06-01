
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const eventRegistration = require('./middlewares/eventRegistration');
const orders = require('./data/orders');
const emitter = require('./middlewares/emitter');

const customers = require('./handlers/customers');
const suppliers = require('./handlers/suppliers');
const transporters = require('./handlers/transporters'); 

app.use(bodyParser.json());
//app.use(emitter);
app.use(eventRegistration);

app.post('/createorderwithoutevent', function(req,res){
    const { trxorder } = req.body;
    
    //a new order is saved to any database/storage e.g : mySQL, postgres, mongodb, etc. 
    orders.push(trxorder);
    console.log(JSON.stringify(orders));

    customers.notifyCustomer(trxorder.orderid);
    suppliers.requestForStock(trxorder.orderid);
    transporters.bookForDelivery(trxorder.orderid);

})

app.post('/createorderwithevent', function(req,res){
    const { trxorder } = req.body;
    
    //a new order is saved to any database/storage e.g : mySQL, postgres, mongodb, etc. 
    orders.push(trxorder);
    console.log(JSON.stringify(orders));
    
    emitter.emit('order_created', trxorder);
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


