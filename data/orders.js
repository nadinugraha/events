const orders = [{
    orderid : 'ORD-001',
    orderdate : '2020-6-1',
    customer : '001-Albert',
    customer_email : 'albert@email.com',
    items : [
        {   
            item : 'apple',
            qty : 2,
            UOM : 'pcs',
            unitprice : 0.8     
        },
        {
            item : 'orange',
            qty : 3,
            UOM : 'pcs',
            unitprice : 1
        }
    ]
}];

module.exports = orders;