import React from 'react'
import lengthImg from '../../Assets/Converters/lengthImg.png';



const LengthConverter = () => {

  const lengthConversion = (e) => {
    let source = e.target.id;
    let valNum = parseFloat(e.target.value);
    var inputFeet = document.getElementById("inputFeet");
    var inputMeters = document.getElementById("inputMeters");
    var inputInches = document.getElementById("inputInches");
    var inputcm = document.getElementById("inputcm");
    var inputYards = document.getElementById("inputYards");
    var inputKilometers = document.getElementById("inputKilometers");
    var inputMiles = document.getElementById("inputMiles");
    if (source==="inputFeet") {
      inputMeters.value=(valNum/3.2808).toFixed(2);
      inputInches.value=(valNum*12).toFixed(2);
      inputcm.value=(valNum/0.032808).toFixed();
      inputYards.value=(valNum*0.33333).toFixed(2);
      inputKilometers.value=(valNum/3280.8).toFixed(5);    
      inputMiles.value=(valNum*0.00018939).toFixed(5);
    }
    if (source==="inputMeters") {
      inputFeet.value=(valNum*3.2808).toFixed(2);
      inputInches.value=(valNum*39.370).toFixed(2);
      inputcm.value=(valNum/0.01).toFixed();
      inputYards.value=(valNum*1.0936).toFixed(2);
      inputKilometers.value=(valNum/1000).toFixed(5);    
      inputMiles.value=(valNum*0.00062137).toFixed(5);
    }
    if (source==="inputInches") {
      inputFeet.value=(valNum*0.083333).toFixed(3);
      inputMeters.value=(valNum/39.370).toFixed(3);
      inputcm.value=(valNum/0.39370).toFixed(2);
      inputYards.value=(valNum*0.027778).toFixed(3);    
      inputKilometers.value=(valNum/39370).toFixed(6);
      inputMiles.value=(valNum*0.000015783).toFixed(6);
    }
    if (source==="inputcm") {
      inputFeet.value=(valNum*0.032808).toFixed(3);
      inputMeters.value=(valNum/100).toFixed(3);
      inputInches.value=(valNum*0.39370).toFixed(2);
      inputYards.value=(valNum*0.010936).toFixed(3);    
      inputKilometers.value=(valNum/100000).toFixed(6);
      inputMiles.value=(valNum*0.0000062137).toFixed(6);
    }
    if (source==="inputYards") {
      inputFeet.value=(valNum*3).toFixed();
      inputMeters.value=(valNum/1.0936).toFixed(2);
      inputInches.value=(valNum*36).toFixed();
      inputcm.value=(valNum/0.010936).toFixed();
      inputKilometers.value=(valNum/1093.6).toFixed(5);
      inputMiles.value=(valNum*0.00056818).toFixed(5);
    }
    if (source==="inputKilometers") {
      inputFeet.value=(valNum*3280.8).toFixed();
      inputMeters.value=(valNum*1000).toFixed();
      inputInches.value=(valNum*39370).toFixed();
      inputcm.value=(valNum*100000).toFixed();
      inputYards.value=(valNum*1093.6).toFixed();
      inputMiles.value=(valNum*0.62137).toFixed(2);    
    }
    if (source==="inputMiles") {
      inputFeet.value=(valNum*5280).toFixed();
      inputMeters.value=(valNum/0.00062137).toFixed();
      inputInches.value=(valNum*63360).toFixed();
      inputcm.value=(valNum/0.0000062137).toFixed();
      inputYards.value=(valNum*1760).toFixed();
      inputKilometers.value=(valNum/0.62137).toFixed(2);    
    }
  }
  

  return (
    <div className='container'>

        <div className='flex flex-col items-center justify-center' data-aos='fade-in' data-aos-delay='100'>
            <img className='img-shadow2' src={lengthImg} alt="Not Found" />
            <h1 className='text-4xl text-white font-bold my-5 text-shadow' >Length Converter</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 place-items-top  gap-8">
                   
                        <div className='text-white  md:mt-0 p-4 space-y-4'>
                          <div data-aos='fade-up' data-aos-delay='200'>
                            <label>Feet</label>
                            <input id='inputFeet' className='input-style w-full' onInput={lengthConversion} placeholder='0 ft' type="number"/>
                          </div>
                          <div data-aos='fade-up' data-aos-delay='300'>
                            <label>Inches</label>
                            <input id='inputInches' className='input-style w-full' onInput={lengthConversion} type="number"  placeholder='0 in'/>
                          </div>
                        </div>
                        <div className='text-white  md:mt-0 p-4 space-y-4'>
                        <div data-aos='fade-up' data-aos-delay='200'>
                            <label>Centimeters</label>
                            <input id='inputcm' className='input-style w-full' onInput={lengthConversion} type="number"  placeholder='0 cm'/>
                          </div>
                        <div data-aos='fade-up' data-aos-delay='300'>
                            <label>Meters</label>
                            <input id='inputMeters' className='input-style w-full' onInput={lengthConversion} placeholder='0 m'  type="number"/>
                          </div>
                          <div data-aos='fade-up' data-aos-delay='400'>
                            <label>Kilometers</label>
                            <input id='inputKilometers' className='input-style w-full' onInput={lengthConversion} type="number"  placeholder='0 km'/>
                          </div>
                        </div>
                        <div className='text-white  md:mt-0 p-4 space-y-4'>
                        <div data-aos='fade-up' data-aos-delay='200'>
                            <label>yard</label>
                            <input id='inputYards' className='input-style w-full' onInput={lengthConversion} placeholder='0 yard'  type="number"/>
                          </div>
                          <div data-aos='fade-up' data-aos-delay='300'>
                            <label>Miles</label>
                            <input id='inputMiles' className='input-style w-full' onInput={lengthConversion} type="number" placeholder='0 mile' />
                          </div>
                        </div>
                        </div>
    </div>
  )
}

export default LengthConverter