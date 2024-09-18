/* eslint-disable no-unused-vars */
import React, { lazy } from 'react'
import banner from "../assets/images/bannerrr.png"
import small_banner from "../assets/images/small_banner.png"
import s_banner from "../assets/images/s_banner.png"
import l_strel from "../assets/l_strel.svg"
import r_strel from "../assets/r_strel.svg"
import ShowModal from '../components/ShowModal'
import Navbar from '../components/Navbar'

function Main() {
  return (
    <main className='w-full h-screen bg-cyan-500 flex flex-col items-center justify-center mt-'>
      {/* <div className='w-full h-20 bg-red-700'>
      </div> */}
      <div className='w-[80%] h-full bg-slate-700 flex  items-center justify-center'>

      </div>
      {/* <div className='w-full flex justify-between rounded-lg gap-x-6'>
        <div className="relative">
          <img className="rounded-lg" src={banner} alt="" />
          <div className="absolute inset-0 flex items-start top-44 justify-between">
            <img className="left-4 cursor-pointer" src={l_strel} alt="Left Arrow" />
            <img className="right-4 cursor-pointer" src={r_strel} alt="Right Arrow" />
          </div>
        </div>

        <div className='flex flex-col justify-between'>
          <div>
            <img src={small_banner} alt="" />
          </div>
          <div>
            <img src={s_banner} alt="" />
          </div>

        </div>

      </div>
      <section className='w-full h-screen'>
      </section> */}
    </main>
  )
}

export default Main;