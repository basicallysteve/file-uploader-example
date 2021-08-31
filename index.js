require('dotenv').config()
const app = require("express")();
const fileUpload = require('express-fileupload');
const fileRoutes = require('./app/routes/file');

app.use(fileUpload());


app.use(fileRoutes)


app.listen(8000);
