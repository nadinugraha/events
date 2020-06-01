const suppliers = {
    
    requestForStock : function(orderid) {
        //request the suppliers about the order as some items have low inventory levels
        console.log('request for stock to supplier is triggered');
    }
}

module.export = suppliers;
