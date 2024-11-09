import React from 'react'
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';

function Logout() {

    const [authUser, setAuthUser] = useAuth();

    const handleLogout =()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem('users');
            setTimeout(()=>{}, 2000);
            toast.success("Logout successfully");
            window.location.reload();
        } catch (error) {
            
        }
    }

  return (
    <div>
        <button className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer " onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout