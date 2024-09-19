// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react'
import exit from "../assets/exit.svg"

// eslint-disable-next-line react/prop-types
function ModalCode({ secondCloseClick }) {
    const inputs = useRef([])
    const [code, setCode] = useState(Array(5).fill(''))
    const [seconds, setSeconds] = useState(36);
    const [isTimerActive, setIsTimerActive] = useState(true);
    const handleChange = (e, index) => {
        const value = e.target.value

        if (/^\d*$/.test(value)) { // Only allow digits
            const updatedCode = [...code];
            updatedCode[index] = value;
            setCode(updatedCode)


            if (value && index < inputs.current.length - 1) {
                inputs.current[index + 1].focus()
            }
        }
    }


    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !e.target.value) {
            if (index > 0) {
                inputs.current[index - 1].focus()
            }
        }


    }

    useEffect(() => {
        let timer;
        if (isTimerActive && seconds > 0) {
            timer = setInterval(() => {
                setSeconds(prev => prev - 1);
            }, 1000);
        }

        if (seconds === 0) {
            setIsTimerActive(false);
        }

        return () => clearInterval(timer);
    }, [isTimerActive, seconds]);

    const requestNewCode = () => {
        if (!isTimerActive) {
            // Logic to request a new code here
            setSeconds(36); // Reset the timer
            setIsTimerActive(true);
        }
    };

    const handleRetryCode = () => {
        setSeconds(36);
        setIsTimerActive(true);
    };




    return (
        <div className='modal_overlay'>
            <div className='modal  flex items-center flex-col p-2 w-420 h-320 rounded-xl' action="">
                <div className='w-full flex items-center justify-end p-'>
                    <button onClick={secondCloseClick}>
                        <img src={exit} alt="" />
                    </button>
                </div>
                <form style={styles.modal}>
                    <h2 style={styles.titleStyle}>Введите код</h2>
                    <p style={styles.paragraph}>Для подтверждения телефона отправили <br /> 5-значный код на <span style={styles.telNumber}>
                             +998 50 570 29 28
                        </span>
                    </p>
                    <div style={styles.inputContainer}>
                        {code.map((digit, index) => (
                            <input
                                key={index}
                                ref={el => inputs.current[index] = el}
                                type='text'
                                maxLength='1'
                                value={digit}
                                required
                                onChange={e => handleChange(e, index)}
                                onKeyDown={e => handleKeyDown(e, index)}
                                style={styles.input}
                            />
                        ))}
                    </div>
                    <button onClick={requestNewCode} style={styles.button} disabled={isTimerActive}>
                        Получить код
                    </button>
                </form>
                <div >
                    {
                        seconds > 0 ? (
                            <p style={styles.warningText}>
                                Если код не придет, можно <br /> получить новый через {seconds} сек
                            </p>
                        ) : (

                            <button style={styles.retryCode} onClick={handleRetryCode}>
                                Отправить код повторно
                            </button>
                        )
                    }

                </div>
                {/* <p style={styles.warningText}>
                    Если код не придет, можно <br />
                    {seconds > 0 ? `получить новый через ${seconds} сек` :
                        <p style={styles.retryCode}>
                            Отправить код повторно
                        </p>
                    }
                </p> */}

              

            </div>

        </div>
    )
}
const styles = {
    modal: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '8px',
        maxWidth: '400px',
        margin: 'auto',
    },
    inputContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px 0',
        padding: '3px'
    },
    input: {
        width: '40px',
        height: '40px',
        fontSize: '17px',
        textAlign: 'center',
        borderRadius: '5px',
        margin: '0 5px',
        background: 'rgba(241, 245, 249, 1)'

    },
    button: {
        width: '100%',
        padding: '9px 20px',
        border: 'none',
        borderRadius: '5px',
        background: '#007bff',
        color: '#fff',
        cursor: 'pointer',
    },
    titleStyle: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    paragraph: {
        textAlign: 'center',
        fontSize: '13px',
    },
    warningText: {
        fontSize: '13px',
        textAlign: 'center',
        padding: '3px'

    },
    retryCode: {
        color: 'rgba(12, 164, 250, 1)',
        fontSize: '14px',
        cursor: 'pointer',
        textDecoration: 'underline',
        textUnderlineOffset: '2px',
    },
    telNumber:{
        fontWeight:'bold',
        fontSize:'13px',
        color:'rgba(255, 3, 76, 1)',

    }
};


export default ModalCode