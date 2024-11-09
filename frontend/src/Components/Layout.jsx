import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout() {
    return (
        <>
        <div className="flex flex-col min-h-screen">
        <Navbar />
            <div className="flex-grow pt-20">
            <Outlet />

            </div>
           
            <Footer />

        </div>
           

        </>
    )
}

export default Layout