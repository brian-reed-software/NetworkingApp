const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({

    username:{
        type:String,
        require: true,
        min:3,
        max:20,
        unique:true,
    },
    email: {
        type: String,
        required: true,
        min:6,
    },
    password: {
        type: String,
        required: true,
        min:6,
    },
    profilePicture: {
        type: String,
        default: "",
        min:6,
    },
    coverPicture: {
        type: String,
        default: "",
        min:6,
    },
    followers:{
        type:Array,
        default:[],
    },
    followerins:{
        type:Array,
        default:[],
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }



},{timestamps:true})

module.exports = mongoose.model("User" , UserSchema)