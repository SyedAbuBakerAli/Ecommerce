const express = require('express');
const cors = require(`cors`);



const cookieParser  = require(`cookie-parser`);
const bodyparser = require(`body-parser`)
const fileUpload = require(`express-fileupload`);
const errorMiddleware = require(`./middleware/errors`)

const app = express();






app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(fileUpload());




//Import all routes
const products = require(`./routes/product`);
const auth = require(`./routes/auth`);
const order = require(`./routes/order`);

app.use(`/api/v1`, products)
app.use(`/api/v1`, auth)
app.use(`/api/v1`, order)

//Middleware to handle errors
app.use(errorMiddleware);

module.exports = app