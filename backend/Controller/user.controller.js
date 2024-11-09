import User from "../model/user.model.js";
import bcrypt from 'bcryptjs'

export const signup = async(req, res)=>{
    try {
        
        const {username, email, password} = req.body;

        const user = await User.findOne({email});

        if(user){
            res.status(400).json({msg:"email already exist"});
        }

        const hashPassword  = await bcrypt.hash(password, 10)

        const newUser = new User({
           username: username,
           email: email,
           password: hashPassword
        })

       const saveData =  await newUser.save();
        res.status(200).json({msg:"user created successfully!", user: saveData})

    } catch (error) {
        
        console.log(error);
        
    }
}

export const login = async(req, res)=>{
    try {
        
        const {email, password} = req.body;
        const user = await User.findOne({email});

        const isMatch =await bcrypt.compare(password, user.password);
        if(!user || !isMatch){
            res.status(400).json({msg:"Invalid username and password!"});
        }else{
            res.status(200).json({msg:"Login Successfully!", user:{
                _id:user._id,
                username:user.username,
                email:user.email
            }});
        }


    } catch (error) {
        console.log("login Error:", error);
        res.status(500).json({msg:"Internal server error!"});
    }
}