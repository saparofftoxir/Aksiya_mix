import React, { useRef, useState } from 'react';

const VerificationCodeInput = () => {
  const inputs = useRef([]);
  const [code, setCode] = useState(Array(5).fill('')); // Change the number if needed (5- or 6-digit)

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) { // Only allow digits
      const updatedCode = [...code];
      updatedCode[index] = value;
      setCode(updatedCode);

      // Move to the next input if value is entered
      if (value && index < inputs.current.length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value) {
      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  return (
    <div style={styles.modal}>
      <h2>Введите код</h2>
      <p>Для подтверждения телефона отправили 5-значный код на +998 33 695-95-50</p>
      <div style={styles.inputContainer}>
        {code.map((digit, index) => (
          <input
            key={index}
            ref={el => inputs.current[index] = el}
            type='text'
            maxLength='1'
            value={digit}
            onChange={e => handleChange(e, index)}
            onKeyDown={e => handleKeyDown(e, index)}
            style={styles.input}
          />
        ))}
      </div>
      <button style={styles.button}>Получить код</button>
      <p>Если код не придет, можно получить новый через 36 сек</p>
    </div>
  );
};

const styles = {
  modal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    margin: 'auto',
    background: '#fff',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 0',
  },
  input: {
    width: '40px',
    height: '40px',
    fontSize: '20px',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '5px',
    margin: '0 5px',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    background: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default VerificationCodeInput;
