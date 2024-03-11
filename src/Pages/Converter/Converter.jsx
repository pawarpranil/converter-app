import React, { useEffect, useState } from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import LengthConverter from '../../Components/Converters/LengthConverter';
import WeightConverter from '../../Components/Converters/WeightConverter';
import TemperatureConverter from '../../Components/Converters/TemperatureConverter';
import { SpeedConverter } from '../../Components/Converters/SpeedConverter';
import Home from '../Homepage/Home';
import Services from '../../Components/Services/Services';

const Converter = ({activeConverter, setActiveConverter}) => {

  useEffect(()=>{
    window.scrollTo({top:0, behavior: 'smooth'});
  },[activeConverter])

    const [sidebar,setSideBar] = useState(false);
  return (
    <>
    {activeConverter ? 
    <main className='md:px-12 md:py-6 bg-primaryDark ' >
    <section className='relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md'>
        <div className="container">
            {/* Navbar Comp */}
            <Navbar sidebar={sidebar} setSideBar={setSideBar}/>

            {/* Converter comp */}
           <div className='converter-wrapper'>
            {activeConverter && activeConverter === "length-converter" ?  
              <LengthConverter/> : <></>
            }
           {activeConverter && activeConverter === "weight-converter" ?  
              <WeightConverter/> : <></>
            }
            {activeConverter && activeConverter === "temperature-converter" ?  
              <TemperatureConverter/> : <></>
            }
            {activeConverter && activeConverter === "speed-converter" ?  
              <SpeedConverter/> : <></>
            }
           </div>
           <Services setActiveConverter={setActiveConverter}/>
            

        </div>
    </section>
    </main>:
    
    <Home setActiveConverter={setActiveConverter}/>}
    </>
    
  )
}

export default Converter