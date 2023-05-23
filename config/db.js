const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser: true, useUnifiedTopology: true
},).then(() => console.log("Connection succeeded"))
.catch((err) => {console.log("Error in connection: " + err)});