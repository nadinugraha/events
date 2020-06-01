const transporters = {
    
    bookForDelivery : function(orderid) {
        //request the transporter to deliver the orders to customer's address
        console.log('book for delivery to transporter is triggered');
    }
}

module.export = transporters;