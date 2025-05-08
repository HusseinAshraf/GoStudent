import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'



    function Layout() {
  return (
    <>
        <div >
            <Header/>
            <main className="flex-grow ">
            <Outlet/>
            </main>
            <Footer/>
            
        </div>
    </>
  )
}

export default Layout