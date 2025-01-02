import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style/global.css'
import Home from './screens/Home/Home'

createRoot(document.getElementById('XU')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
