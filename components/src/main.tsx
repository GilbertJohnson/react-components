import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./index.css"
import Accordion from './components/Accordion/Accordion.tsx'
import AnalogClock from './components/AnalogClock/AnalogClock.tsx'
import Counter from './components/Counter/Counter.tsx'
import SkeletonLoader from './components/SkeletonLoader/SkeletonLoader.tsx'
import TimerMain from './components/Timer/TimerMain.tsx'
import StarRating from './components/StarRating/StarRating.tsx'
import ColorFulList from './components/ColorfulList/ColorFulList.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path="/accordion" element={<Accordion />}/>
        <Route path='/analogclock' element={<AnalogClock/>}/>
        <Route path='/counter' element={<Counter />}/>
        <Route path='/skeleton-loader' element={<SkeletonLoader/>}/>
        <Route path='/timer' element={<TimerMain />}/>
        <Route path='/starrating' element={<StarRating/>}/>
        <Route path='/colorfullist' element={<ColorFulList />} />
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
