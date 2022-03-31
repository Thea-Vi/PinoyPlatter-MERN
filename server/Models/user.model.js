const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullName : {
        type: String,
        require
    },
    email : {
        type: String, 
        require
    },
    password: {
        type: String,
        require
    },
    isAdmin:{
        type: Boolean,
        require,
        default: false
    },

},  {
    timeStamp : true
})

const User = mongoose.model("User", userSchema);

module.exports = User;