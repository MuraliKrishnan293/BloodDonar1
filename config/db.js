// const mongoose = require("mongoose");
// const colors = require("colors");
// const ur = "mongodb+srv://peruvayalavinodh465:peruvayalavinodh465@cluster0.ggjsp.mongodb.net/BloodDonar?retryWrites=true&w=majority";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(ur, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false
//     });
//     console.log(`Connected To Mongodb Database ${mongoose.connection.host}`.bgMagenta.white);
//   } catch (error) {
//     console.log(`Mongodb Database Error ${error}`.bgRed.white);
//   }
// };

// module.exports = connectDB;



const mongoose = require("mongoose");
const colors = require("colors");

const ur = "mongodb+srv://peruvayalavinodh465:peruvayalavinodh465@cluster0.ggjsp.mongodb.net/BloodDonar?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(ur, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`Connected To Mongodb Database ${mongoose.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;