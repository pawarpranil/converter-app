import React, { useEffect, useState } from 'react'
import  Aos  from 'aos';
import 'aos/dist/aos.css';
import Home from './Pages/Homepage/Home';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Converter from './Pages/Converter/Converter';

export default function App () {

  const [activeConverter, setActiveConverter] = useState("")

  useEffect(()=>{
    Aos.init({
      duration: 1000,
      delay: 100,
      easing: 'ease-in-cubic'
    })
  },[])
  return (
    <main>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home setActiveConverter={setActiveConverter}/>}></Route>
        <Route path='/converter' element={<Converter setActiveConverter={setActiveConverter} activeConverter={activeConverter}/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </main>
  )
}
