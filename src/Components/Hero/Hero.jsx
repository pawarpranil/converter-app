import React, { useState } from 'react';
import convertImg from '../../Assets/convertImg.png';
import { Navbar } from '../Navbar/Navbar';
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";


export const Hero = () => {

    const handleScroll=()=> {
        window.scroll({
          top: document.body.offsetHeight,
          left: 0, 
          behavior: 'smooth',
        });
      }

    const [sidebar, setSideBar] = useState(false);

  return (
    <main className='md:px-12 md:py-6 bg-primaryDark ' >
        <section className='relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md'>
            <div className="container">
                {/* Navbar Comp */}
                <Navbar sidebar={sidebar} setSideBar={setSideBar}/>
                {/* Hero Comp */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[650px]">
                    {/* text  */}
                        <div className='text-white mt-[100px] md:mt-0 p-4 space-y-4'>
                            <h1 className='text-3xl pl-6 md:pl-14' data-aos='fade-up'>01____________</h1>
                            <h1 className='text-5xl font-bold uppercase text-shadow' data-aos='fade-up' data-aos-delay='300'> Conversion is basic tool</h1>
                            <p className='text-sm' data-aos='fade-up' data-aos-delay='500'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <button className='primary-btn' onClick={handleScroll} data-aos='fade-up' data-aos-delay='700' data-aos-offset='0'>
                                Start Converting
                            </button>
                        </div>
                    {/* image */}
                    <div data-aos='zoom-in'>
                    <img className='relative z-10 w-[400px] img-shadow' src={convertImg} alt="Not-Found" />
                    </div>
                    {/* spacing section */}
                    <div className="md:hidden"></div>
                </div>
            </div>

            {/* Backgroung Large Text */}
            <h1 data-aos='fade' data-aos-delay='600' data-aos-duration='1800' className='large-text'>Convert</h1>

            {/* sidebar Section  */}

            {
                sidebar && (
                    <div className='absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary to-secondary z-10'>
                        <div className='w-full h-full flex justify-center items-center'>
                            <div className='flex flex-col text-white justify-center items-center gap-6'>
                                {/* line  */}
                                <div className='w-[1px] h-[70px] bg-white'></div>
                                    <div className='inline-block p-2 rounded-full cursor-pointer border border-white '>
                                        <FaFacebookF className='text-2xl' />
                                    </div>
                                    <div className='inline-block p-2 rounded-full cursor-pointer border border-white '>
                                        <FaInstagram className='text-2xl' />
                                    </div>
                                    <div className='inline-block p-2 rounded-full cursor-pointer border border-white '>
                                        <FaLinkedin className='text-2xl' />
                                    </div>
                                    <div className='w-[1px] h-[70px] bg-white'></div>
                            </div>
                        </div>
                    </div>
                )
            }
        </section>
    </main>
  )
}
