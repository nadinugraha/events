const emitter = require('./emitter');
const customers = require('../handlers/customers');
const suppliers = require('../handlers/suppliers');
const transporters = require('../handlers/transporters');

emitter.on('order_created', customers.notifyCustomer);
emitter.on('order_created', suppliers.requestForStock);
emitter.on('order_created', transporters.bookForDelivery);
