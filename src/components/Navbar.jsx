// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavLink } from 'react-router-dom'
import russian from "../assets/russian.svg"
import uzbekistan from "../assets/uzbekistan.svg"
import line from "../assets/line.svg"
import logo from "../assets/logo.svg"
import menyu from "../assets/menyu.svg"
import strel from "../assets/strel.svg"
import search from "../assets/search.svg"
import call from "../assets/call.svg"
import like from "../assets/like.svg"
// eslint-disable-next-line react/prop-types
function Navbar({ handleLoginClick }) {
  return (
    <main className='w-full flex-col'>
      <header className='w-full flex flex-col items-center'>
        <div className='w-full flex text-base h-48 bg-bg_gry items-center justify-center gap-x-8'>
          <div className='w-[80%] flex items-center justify-end gap-x-6'>
            <ul className='flex text-black text-13 gap-x-10'>
              <li>
                <NavLink to={'/'}>Рыба текст</NavLink>
              </li>
              <li>
                <NavLink to={'/'}>Рыба текст</NavLink>
              </li>
            </ul>
            <ul className='flex items-center text-black gap-x-1'>
              <li className='hover:bg-h_blue px-1 h-32 rounded text-13 ease-linear flex items-center gap-x-1 cursor-pointer'>
                <img src={russian} alt="" />
                Ру
              </li>
              <img src={line} alt="" />
              <li className='hover:bg-h_blue h-32 px-1 text-13 rounded ease-linear flex items-center gap-x-1 cursor-pointer'>
                <img src={uzbekistan} alt="" />
                O’z
              </li>
            </ul>
          </div>
        </div>

        <ul className='w-[80%] h-[60px] flex items-center justify-between'>
          <ul className='w-full flex items-center'>
            <li className=' w-48 text-lg font-semibold cursor-pointer'>
              <NavLink className='flex items-center gap-x-3' to={'/'}>
                <img className='w-8 h-8' src={logo} alt="" />
                Aksiya Mix
              </NavLink>
            </li>
            <ul className='w-full flex items-center'>
              <div className='w-28 p-2 rounded-lg bg-purple text-white flex items-center justify-center gap-x-2 cursor-pointer'>
                <img src={menyu} alt="menu" />
                <span className='text-t_purple text-13'>Каталог</span>
              </div>
              <div className='flex-1 h-9 mx-2 rounded-lg flex items-center justify-between px-3 bg-white bg-transparent border-2'>
                <input className='outline-none w-[50%] text-13 text-black' type="text" placeholder='Поиск' />
                <div className='flex items-center cursor-pointer'>
                  <div className='w-full flex items-center text-13 justify-center p-1.5 px-3 border-r-2 border-l-2'>
                    Все регионы
                    <img src={strel} alt="" />
                  </div>
                  <div className='pl-3'>
                    <img src={search} alt="" />
                  </div>
                </div>
              </div>
              <ul className='h-48 flex items-center justify-center pl-4'>
                <li className='w- flex items-center gap-x-5'>
                  <NavLink to={'/'}>
                    <img className='' src={call} alt="" />
                  </NavLink>
                  <NavLink to={'/'}>
                    <img src={like} alt="" />
                  </NavLink>
                </li>
                <li className='w-[112px] h-9 text-white flex text-16 ml-7 bg-reg_blue rounded-lg'>
                  <NavLink className='w-full flex' to={'/'}>
                    <button onClick={handleLoginClick} className='w-full  flex text-14 items-center justify-center'>
                      Войти
                    </button>
                  </NavLink>
                </li>
              </ul>
            </ul>
          </ul>
        </ul>


        <nav className='w-[80%] h-[56px] flex bg-white '>
          <ul className='w-full flex items-center text-12 text-text_g justify-between font-medium'>
            <li className='  cursor-pointer '>
              <NavLink to={'/about'}>
                Категории
              </NavLink>
            </li>
            <li className='  cursor-pointer'>
              <NavLink to={'/'}>
                Лучшие объявления
              </NavLink>
            </li>
            <li className=' cursor-pointer'>
              <NavLink to={'/'}>
                Объявления о начале скидки
              </NavLink>
            </li>
            <li className=' cursor-pointer'>
              <NavLink to={'/'}>
                для тебя
              </NavLink>
            </li>
            <li className=' cursor-pointer'>
              <NavLink to={'/'}>
                Скидки рядом
              </NavLink>
            </li>
            <li className=' cursor-pointer'>
              <NavLink to={'/'}>
                Последние просмотренные объявления
              </NavLink>
            </li>
            <li className='cursor-pointer'>
              <NavLink to={'/'}>
                Остановленные объявления
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

    </main>
  );
}




export default Navbar