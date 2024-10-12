const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
// const connectDB = require("./config/db");
//dot config
// dotenv.config();

//mongodb connection
// connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));



try{
  mongoDBURL = "mongodb+srv://MuraliKrishnan412:MuraliKrishnan412@cluster0.d0ek1az.mongodb.net/BloodDonar?retryWrites=true&w=majority";
mongoose.connect(mongoDBURL,
).then(()=>{
  console.log("Successfully connected to Database");
})
}
catch(e){
  console.log(e)
}

//routes
// 1 test route
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

//port
const PORT = 8080;

//listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ModeOn Port ${PORT}`
      .bgBlue.white
  );
});


// const ur = "mongodb+srv://peruvayalavinodh465:peruvayalavinodh465@cluster0.ggjsp.mongodb.net/BloodDonar?retryWrites=true&w=majority";
// mongoose.connect(ur);