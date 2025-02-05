import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Accordion from './components/Accordion/Accordion.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./index.css"
import AnalogClock from './components/AnalogClock/AnalogClock.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path="/accordion" element={<Accordion />}/>
        <Route path='/analogclock' element={<AnalogClock/>}/>
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
