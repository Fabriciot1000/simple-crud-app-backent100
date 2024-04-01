const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");
const app = express();

//Midleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products", productRoute);


app.get('/', (req, res) =>{
    res.send("Hello from Node AP updating");
});



mongoose.connect("mongodb+srv://fabricioedgardomoralestobar:SpIWxMeqTXPixvpQ@backenddb.wzfwtho.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() =>{
    console.log("Conected to database!");
    //Iniciamos el server luego de haberse conectado a la base de datos
    app.listen(3000, () => {
        console.log('Server is runnig on port 3000');
    });
})
.catch(() =>{
    console.log("Connection Failed");
});