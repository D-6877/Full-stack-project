import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';


function Signup() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const user ={
        name,email, password
    }

    const handleSignup = async()=>{
       
        const userInfo = {
            username: user.name,
            email:user.email,
            password:user.password
        }

       await axios.post('http://localhost:3000/api/signup', userInfo)
        .then((res)=>{
            console.log(res.data);
            if(res.data){
                setTimeout(()=>{},2000)
               
                toast.success("signup successfully!")
                
            }       
            localStorage.setItem('users',JSON.stringify( res.data.user));  
            navigate("/");
            window.location.reload();
            
            
        })
        .catch((err)=>{
            if(err.response){
                console.log(err.response.data.msg);
                
                toast.error("Error: "+err.response.data.msg)
                
            }
        })
        
        setName('');
        setEmail('');
        setPassword('');
        
    }




    return (
        <div className='flex justify-center items-center mt-5 ' >

            <div className="modal-box">

                <h3 className="font-bold text-xl text-center text-pink-500">Signup!</h3>
                <div className='mt-3 space-y-2'>
                    <span >Name</span>
                    <br />
                    <input
                        type="text"
                        placeholder='Enter your Name'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className='w-80 px-3 py-1 border rounded-md border-slate-500 focus:border-blue-500 focus:outline-none'
                    />
                    <br />
                    <span >Email</span>
                    <br />
                    <input
                        type="email"
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className='w-80 px-3 py-1 border rounded-md border-slate-500 focus:border-blue-500 focus:outline-none'
                    />
                    <br />
                    <span >Passowrd</span>
                    <br />
                    <input
                        type="password"
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className='w-80 px-3 py-1 border rounded-md border-slate-500 focus:border-blue-500 focus:outline-none '
                    />

                </div>
                <div className='flex justify-between mt-4'>
                    <button className='bg-pink-500 text-white px-2 py-1 rounded-md hover:bg-pink-700 duration-600'onClick={handleSignup} >Signup</button>
                    <p >Already have an account? <span onClick={handleLogin} className='underline text-blue-500 cursor-pointer' >Login</span></p>
                </div>

            </div>


        </div>
    )
}

export default Signup