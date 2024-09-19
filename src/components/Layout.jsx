/* eslint-disable no-unused-vars */
import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const Navbar = lazy(() => import('../components/Navbar'))
const Main = lazy(() => import('../pages/Main'))
const About = lazy(() => import('../pages/About'))
// eslint-disable-next-line react/prop-types
function Layout({ handleLoginClick }) {
  return (
    <div className='w-full flex justify-center flex-col items-center'>
        <Navbar handleLoginClick={handleLoginClick} />
      <div className='w-[80%]'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />

        </Routes>
      </div>
    </div>
  )
}

export default Layout 