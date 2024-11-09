import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { BrowserRouter, createBrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Course from './Components/Course'
import Layout from './Components/Layout'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Contact from './Components/Contact'
import About from './Components/About'
import { useAuth } from './context/AuthProvider';



function App() {

  
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  




  return (
    <>
      {/* <Home /> */}
      <BrowserRouter future={{
    v7_startTransition: true,
  }}>
        <Routes >
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/course' element={authUser? <Course /> : <Navigate to='/signup' /> } />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />



    </>
  )
}

export default App
