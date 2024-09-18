import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'

createRoot(document.getElementById('root')).render(
  <BrowserRouter >
  <Suspense fallback={<h2>Loading...</h2>}>
    <App />
  </Suspense>
  </BrowserRouter>
)
