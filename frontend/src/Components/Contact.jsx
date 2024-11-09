import React, { useState } from 'react'

function Contact() {

    const[name, setName] = useState();
    const[email, setEmail] = useState();
    const[messgae, setMessage] = useState();
    const user = {
        name,
        email,
        messgae
    }


    const handleMessage = ()=>{
        console.log(user);
        setName('');
        setEmail('');
        setMessage('');
        
    }



  return (
    <div>
        <div className='flex justify-center items-center mt-5 ' >

<div className="modal-box px-24">

    <h3 className="font-bold text-xl text-center text-pink-500">Contact Us!</h3>
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
        <span>Message</span>
        <br />
        <textarea name="" id="" className='w-[320px] h-52 border border-slate-500 rounded-md focus:border-blue-500 focus:outline-none'
        value={messgae}
         onChange={(e)=>setMessage(e.target.value)}
        >

        </textarea>
        

    </div>
    <div className='flex justify-center mt-4' >
        <button className='bg-pink-500 text-white px-2 py-1 rounded-md hover:bg-pink-700 duration-600'onClick={handleMessage} >Send Message</button>
        
    </div>

</div>


</div>
    </div>
  )
}

export default Contact