import React from 'react'
import speedImg from '../../Assets/Converters/speedImg.png';

export const SpeedConverter = () => {
    const speedConversion = (e) => {
        let source = e.target.id;
        let valNum = parseFloat(e.target.value);
        var inputMPH = document.getElementById("inputMPH");
        var inputKPH = document.getElementById("inputKPH");
        var inputKnots = document.getElementById("inputKnots");
        var inputMach = document.getElementById("inputMach");
        if (source==="inputMPH") {
          inputKPH.value=(valNum*1.609344).toFixed(2);
          inputKnots.value=(valNum/1.150779).toFixed(2);
          inputMach.value=(valNum/761.207).toFixed(4);
        }
        if (source==="inputKPH") {
          inputMPH.value=(valNum/1.609344).toFixed(2);
          inputKnots.value=(valNum/1.852).toFixed(2);
          inputMach.value=(valNum/1225.044).toFixed(5);
        }
        if (source==="inputKnots") {
          inputMPH.value=(valNum*1.150779).toFixed(2);
          inputKPH.value=(valNum*1.852).toFixed(2);
          inputMach.value=(valNum/661.4708).toFixed(4);
        }
        if (source==="inputMach") {
          inputMPH.value=(valNum*761.207).toFixed();
          inputKPH.value=(valNum*1225.044).toFixed();
          inputKnots.value=(valNum*661.4708).toFixed();
        }
      }
  return (
    <div className='container'>

        <div className='flex flex-col items-center justify-center' data-aos='fade-in' data-aos-delay='100'>
            <img className='img-shadow2' src={speedImg} alt="Not Found" />
            <h1 className='text-4xl text-white font-bold my-5 text-shadow' >Speed Converter</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-top  gap-8">
                   
                        <div className='text-white  md:mt-0 p-4 space-y-4'>
                          <div data-aos='fade-up' data-aos-delay='200'>
                            <label>MPH</label>
                            <input id='inputMPH' className='input-style w-full' onInput={speedConversion} placeholder='MPH' type="number"/>
                          </div>
                          <div data-aos='fade-up' data-aos-delay='300'>
                            <label>KPH</label>
                            <input id='inputKPH' className='input-style w-full' onInput={speedConversion} placeholder='KPH' type="number"/>
                          </div>
                        </div>
                        <div className='text-white  md:mt-0 p-4 space-y-4'>
                        <div data-aos='fade-up' data-aos-delay='200'>
                            <label>Knots</label>
                            <input id='inputKnots' className='input-style w-full' onInput={speedConversion} type="number"  placeholder='Knots'/>
                          </div>
                        </div>
                        <div className='text-white  md:mt-0 p-4 space-y-4'>
                        <div data-aos='fade-up' data-aos-delay='200'>
                            <label>Mach</label>
                            <input id='inputMach' className='input-style w-full' onInput={speedConversion} placeholder='Mach'  type="number"/>
                          </div>
                        </div>
                        </div>
    </div>
  )
}
