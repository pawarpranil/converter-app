import React from 'react';
import temperatureImg from '../../Assets/Converters/temperatureImg.png';
import lengthImg from '../../Assets/Converters/lengthImg.png';
import weightImg from '../../Assets/Converters/weightImg.png';
import speedImg from '../../Assets/Converters/speedImg.png';
import { useNavigate } from "react-router-dom";

const ServicesData = [{
    id:1,
    image: temperatureImg,
    title: " Temperature Conerverter",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    aosDelay: "300",
    btnCta: "Temperature Converter",
    btnValue:'temperature-converter'
},
{
    id:2,
    image: lengthImg,
    title: " Length Conerverter",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    aosDelay: "500",
    btnCta: "Length Converter",
    btnValue:'length-converter'
},
{
    id:3,
    image: weightImg,
    title: " Weight Conerverter",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    aosDelay: "700",
    btnCta: "Weight Converter",
    btnValue:'weight-converter'
},
{
    id:4,
    image: speedImg,
    title: " Speed Conerverter",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    aosDelay: "300",
    btnCta: "Speed Converter",
    btnValue:'speed-converter'
}]




function Services({setActiveConverter}) {

    const navigate = useNavigate()

    const handleBtnClick =(value)=>{
        setActiveConverter(value);
        navigate('/converter');
    }
  return (
    <div className='container my-16 space-y-4'>
        {/* header section  */}

        <div className='text-center max-w-lg mx-auto space-y-2'>
            <h1 className='text-3xl font-bold text-dark' data-aos='fade-up'> Get Started with <span className='text-primaryDark'>Conversion</span> {"  "}</h1>
            <p className='text-sm opacity-50' data-aos='fade-up' data-aos-delay='300'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>

        {/* Card Section  */}

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {ServicesData.map(({id, image, title, subtitle, aosDelay, btnCta, btnValue})=>(
                <div key={id} data-aos="fade-up" data-aos-delay={aosDelay} className='p-4 text-center space-y-6'>
                    <img src={image} alt="Not Found" className='max-w-[200px] h-[200px] mx-auto hover:scale-110 duration-300 img-shadow2'/>
                    <div className='space-y-2'>
                        <h1 className='text-2xl font-bold text-primaryDark'>{title}</h1>
                        <p className='text-dark'>{subtitle}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleBtnClick(btnValue)} className='secondary-btn hover:scale-110 duration-300'>{btnCta}</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services;