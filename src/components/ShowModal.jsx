// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react'
import exit from "../assets/exit.svg"
// eslint-disable-next-line react/prop-types
function ShowModal({ handleCloseModal,showSecondModal }) {
    const [tel,setTel]=useState("+998 ")
    return (
        <div className='modal_overlay'>
            <div className='modal  flex items-center flex-col p- w-420 h-320 bg-gray-800 rounded-xl' action="">
                <div className='w-full flex items-center justify-end p-2'>
                    <button onClick={handleCloseModal}>
                        <img src={exit} alt="" />
                    </button>
                </div>

                <form className='w-[320px] h-[224px] flex flex-col items-center justify-center' action="">
                    <div className='w-full h-full'>
                        <div className='w-full flex flex-col items-center gap-y-2'>
                            <h1 className='text-24 text-text_b font-semibold '>Введите номер телефона</h1>
                            <h2 className=' text-16 text-text_g'>
                                Отправим смс с кодом подтверждения
                            </h2>
                        </div>
                    </div>
                    <div className='w-full h-full flex flex-col text-reg_gray gap-y-1'>
                        <span className=' text-14'>Номер телефона</span>
                        <div className='flex flex-col gap-y-3'>

                            <input
                            onChange={e=>setTel(e.target.value)}
                                id="phoneInput"
                                className='w-full h-42 text-14 rounded-lg bg-reg_bg text-text_b outline-none px-3'
                                type="tel"
                                value={tel}
                                required
                            />

                            <button onClick={showSecondModal}  className='w-full h-42 text-16 font-medium rounded-lg text-text_b outline-none px-3 bg-reg_blue text-white' type="text" placeholder='+998'>
                                Получить код
                            </button>
                            
                        </div>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default ShowModal