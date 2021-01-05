const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://db:27017", 
    {useUnifiedTopology: true},
    (error, connection) => {
        if(error) return console.log(error);
        global.connection = connection.db("aula02");
        console.log("conected!");
    });

    function findCustomers() {
        global.connection.collection("customers").find({}).toArray();
    }

    module.exports = { findCustomers }