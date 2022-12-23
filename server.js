const express = require('express');
var bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(bodyParser.json())
const dotenv = require('dotenv')
dotenv.config({path:"./config.env"})
require("./config/connection")
// routes
const adminRoute = require('./routes/adminRoute')
const categoryRouter = require('./routes/categoryRouter')
const countryRoute = require('./routes/countryRoute')
const packageRouter = require('./routes/packageRouter')
const placeRouter = require('./routes/placeRouter')
const stateRouter = require('./routes/stateRouter')
const userRoute = require('./routes/userRoute')
const vehicleRouter = require('./routes/vehicleRouter')


app.use('/api/Admin',adminRoute);
app.use('/api/category',categoryRouter);
app.use('/api/country',countryRoute);
app.use('/api/package',packageRouter);
app.use('/api/place',placeRouter);
app.use('/api/state',stateRouter);
app.use('/api/user',userRoute);
app.use('/api/vehicle',vehicleRouter);


app.listen(8000,(req,res)=>{
    console.log("Port is connected to 8000");
})

