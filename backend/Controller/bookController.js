import express from 'express';
import bookmodel from '../model/book.model.js'
 export const getBook = async(req, res)=>{
    try {

        const bookData = await bookmodel.find();
        // res.status(200).json({msg:"book is found!"})
        res.status(200).json({bookData})


        
    } catch (error) {
        console.log("book finding error: ", error);
        res.status(200).json({msg:error})
        
    }
}



