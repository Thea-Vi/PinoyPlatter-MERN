const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://root:root@mern.zurl2.mongodb.net/mern'

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', () =>{
    console.log(`Connection Successful`)
})


db.on('error', () =>{
    console.log(`Connection failed`)
})

module.exports = mongoose




// mongoose
//   .connect("mongodb://localhost/mern", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Established a connection to the database"))
//   .catch((err) =>
//     console.log("Something went wrong when connecting to the database ", err)
//   );
