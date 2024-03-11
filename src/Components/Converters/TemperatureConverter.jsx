import React from 'react'
import temperatureImg from '../../Assets/Converters/temperatureImg.png'

const TemperatureConverter = () => {

    const temperatureConversion = (e) => {
        let source = e.target.id;
        let valNum = parseFloat(e.target.value);
        var inputFahrenheit = document.getElementById("inputFahrenheit");
        var inputCelsius = document.getElementById("inputCelsius");
        var inputKelvin = document.getElementById("inputKelvin");
        if (source==="inputFahrenheit") {
          inputCelsius.value=((valNum-32)/1.8).toFixed(2);
          inputKelvin.value=(((valNum-32)/1.8)+273.15).toFixed(2);
        }
        if (source==="inputCelsius") {
          inputFahrenheit.value=((valNum*1.8)+32).toFixed(2);
          inputKelvin.value=((valNum)+273.15).toFixed(2);
        }
        if (source==="inputKelvin") {
          inputFahrenheit.value=(((valNum-273.15)*1.8)+32).toFixed(2);
          inputCelsius.value=((valNum)-273.15).toFixed(2);
        }
      }
  return (
    <div className='container'>

        <div className='flex flex-col items-center justify-center' data-aos='fade-in' data-aos-delay='100'>
            <img className='img-shadow2' src={temperatureImg} alt="Not Found" />
            <h1 className='text-4xl text-white font-bold my-5 text-shadow' >Temperature Converter</h1>
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-3 place-items-top  gap-8">
                   
                        <div className='text-white  md:mt-0 p-4 space-y-4'>
                          <div data-aos='fade-up' data-aos-delay='200'>
                            <label>Fahrenheit</label>
                            <input id='inputFahrenheit' className='input-style w-full' onInput={temperatureConversion} placeholder='℉' type="number"/>
                          </div>
                        </div>
                        <div className='text-white  md:mt-0 p-4 space-y-4'>
                        <div data-aos='fade-up' data-aos-delay='200'>
                            <label>Celsius</label>
                            <input id='inputCelsius' className='input-style w-full' onInput={temperatureConversion} type="number"  placeholder='℃'/>
                          </div>
                        </div>
                        <div className='text-white  md:mt-0 p-4 space-y-4'>
                        <div data-aos='fade-up' data-aos-delay='200'>
                            <label>Kelvin</label>
                            <input id='inputKelvin' className='input-style w-full' onInput={temperatureConversion} placeholder='K'  type="number"/>
                          </div>
                        </div>
                        </div>
    </div>
  )
}

export default TemperatureConverter