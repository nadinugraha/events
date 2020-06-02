customers = {
    notifyCustomer : function(orderid) {
        setTimeout(function() {
            console.log('nofitying customer about the new order he created : ' + orderid);
        },
        2000);
    }
}

module.exports = customers;