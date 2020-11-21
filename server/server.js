const express = require('express');
const customersRouter = require("./routes/customersRouter");
const ordersRouter = require("./routes/ordersRouter");
const deliverersRouter = require("./routes/deliverersRouter");
const paymentsRouter = require("./routes/paymentsRouter");
const productsRouter = require("./routes/productsRouter");
const poRouter = require("./routes/products_ordersRouter")
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
var corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    headers: "Origin, X-Requested-With, Content-Type, Accept"
  };

app.use(express.json());
app.use(bodyParser.json());
//app.use(cors(corsOptions));
app.use(cors());

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   });

app.use("/customers", customersRouter);
app.use("/orders", ordersRouter);
app.use("/deliverers", deliverersRouter);
app.use("/payments", paymentsRouter);
app.use("/products", productsRouter);
app.use("/products_orders", poRouter);

app.listen(process.env.PORT || '3892', () => {
    console.log(`Server is running on port: ${process.env.PORT || '3892'}`);
});