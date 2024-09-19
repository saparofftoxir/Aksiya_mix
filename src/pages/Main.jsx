/* eslint-disable no-unused-vars */
import React, { lazy } from 'react'
import banner from "../assets/images/bannerrr.png"
import small_banner from "../assets/images/small_banner.png"
import s_banner from "../assets/images/s_banner.png"
import l_strel from "../assets/l_strel.svg"
import r_strel from "../assets/r_strel.svg"
import ShowModal from '../components/ShowModal'
import Navbar from '../components/Navbar'
import Corusel from '../components/Corusel'
import ModalCode from '../components/ModalCode'
function Main() {
  return (
    <main className='w-full h-screen flex flex-col '>
      
      <div className='w-full  flex justify-between rounded-lg gap-x-5'>
        <div className='w-710 h-full'>
          <Corusel/>
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
      
      <div>

      </div>
      

    </main>
  )
}

export default Main;