import React, { useState } from 'react'
import { Hero } from '../../Components/Hero/Hero';
import Services from '../../Components/Services/Services';


export default function Home ({setActiveConverter}) {

    return ( 
        <main className='overflow-x-hidden overflow-y-hidden'>
        <Hero/>
        <Services setActiveConverter={setActiveConverter}/>
      </main>
     );
}


