const mongoose = require("mongoose");
const adoptSchema = new mongoose.Schema({
    doggender:{
        type: String,
        required:true,
    },
    dogname:{
        type: String,
        required:true,
        min:3,
        max:25,
        unique:true,
    },
    dogbreed:{
        type: String,
        required:true,
        max:50,
        
    },
    dogage:{
        type: String,
        required:true,
        min:8,
    },
    owner:{
        type: String,
        required:true,
        min:3,
        max:25,
    },
    contact:{
        type: String,
        required:true,
        min:10,
        max:10,
    },
    dogpic: {
        type: String,
        required: true,
        default:
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYupwNxYjZ6PvNx9U9tBwXGmOu0eX9BkCP5_td1GcyhqM7mMF&s",
      },
    
},{
    timestamps:true
});
module.exports = mongoose.model("adopt",adoptSchema);