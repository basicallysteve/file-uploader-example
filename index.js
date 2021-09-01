require('dotenv').config()
const app = require("express")();
const cors = require("cors");
const fileUpload = require('express-fileupload');
const fileRoutes = require('./app/routes/file');

app.use(cors())

app.use(fileUpload());


app.use(fileRoutes)


app.listen(8000);
