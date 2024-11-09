import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    }


})

const book = new mongoose.model('book', bookSchema);
export default book;