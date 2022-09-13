const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    firstName: { 
       type: String,
       required: true,},

    lastName: { 
        type: String,
        required: true,},

    middleName: String,

    email: { 
       type: String,
       required: true,},

    gender: { 
        type: String,
        required: true,},
})

module.exports = model("user", userSchema)