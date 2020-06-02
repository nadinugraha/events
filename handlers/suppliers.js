const suppliers = {
    
    requestForStock : function(orderid) {
        //request the suppliers about the order as some items have low inventory levels
        setTimeout(function(){
            console.log('request for stock to supplier is triggered : ' + orderid);
        },2000);
        
    }
}

module.exports = suppliers;
