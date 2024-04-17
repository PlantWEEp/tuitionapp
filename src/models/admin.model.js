const mongoose = require('mongoose');
const { Schema } = mongoose;  

const adminSchema = new Schema({
    name: { 
        type: String  
    },
    password: {
        type: String,
        required: true  
    },
    email: { 
        type: String,
        required: true, 
    },
    role:{
        type: String,
        default: "admin"
    }
});

module.exports = mongoose.model("Admin", adminSchema);
