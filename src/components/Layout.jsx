/* eslint-disable no-unused-vars */
import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const Navbar =lazy(()=>import('../components/Navbar'))
const Main =lazy(()=>import('../pages/Main'))
const About =lazy(()=>import('../pages/About'))
// eslint-disable-next-line react/prop-types
function Layout({handleLoginClick}) {
  return (
    <>
    <Navbar handleLoginClick={handleLoginClick}/>
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>

    </Routes>
    </>
  )
}

export default Layout 