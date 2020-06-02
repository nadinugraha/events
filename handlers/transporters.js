const transporters = {
    
    bookForDelivery : function(orderid) {
        //request the transporter to deliver the orders to customer's address
        setTimeout(function() {
            console.log('book for delivery to transporter is triggered : ' + orderid);
        }, 2000);
    }
}

module.exports = transporters;