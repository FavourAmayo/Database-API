const express = require('express');
const apiRouter = require('./routes');
const customersRouter = require("./routes/customersRouter");
const ordersRouter = require("./routes/ordersRouter");
const deliverersRouter = require("./routes/deliverersRouter");
const paymentsRouter = require("./routes/paymentsRouter");
const productsRouter = require("./routes/productsRouter");
const poRouter = require("./routes/products_ordersRouter")
let bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use('/api/chirps', apiRouter);
app.use("/customers", customersRouter);
app.use("/orders", ordersRouter);
app.use("/deliverers", deliverersRouter);
app.use("/payments", paymentsRouter);
app.use("/products", productsRouter);
app.use("/products_orders", poRouter);

app.listen(process.env.PORT || '3892', () => {
    console.log(`Server is running on port: ${process.env.PORT || '3892'}`);
});