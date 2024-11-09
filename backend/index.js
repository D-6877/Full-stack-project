import express from "express";
import dotenv from 'dotenv';
import connectDB from "./util/db.js";
import bookRouter from './Router/book.route.js'
import userRouter from './Router/user.route.js'
import bodyParser from "body-parser";
import cors from 'cors'



const app = express();
app.use(bodyParser.json());
app.use(cors());

dotenv.config();

app.get("/",(req, res)=>{
    res.send("Hello jee")
})

app.use('/api', bookRouter);
app.use('/api',userRouter);


connectDB();

app.listen(process.env.PORT|| 4000,()=>{
    console.log(`server is running on ${process.env.PORT}`);

})