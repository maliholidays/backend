const mongoose = require("mongoose")
const db = "mongodb+srv://maliholidays45:maliholidays45@cluster0.eftk4yp.mongodb.net/mali?retryWrites=true&w=majority"
mongoose.connect(db).then(()=>{
    console.log("Connection is successful");
}).catch((err)=>{
    console.log("no connection",err);
})