import React from 'react'
import weightImg from '../../Assets/Converters/weightImg.png'
const WeightConverter = () => {

    const weightConversion = (e) => {
        let source = e.target.id;
        let valNum = parseFloat(e.target.value);
        var inputPounds = document.getElementById("inputPounds");
        var inputKilograms = document.getElementById("inputKilograms");
        var inputOunces = document.getElementById("inputOunces");
        var inputGrams = document.getElementById("inputGrams");
        var inputStones = document.getElementById("inputStones");
        if (source==="inputPounds") {
          inputKilograms.value=(valNum/2.2046).toFixed(2);
          inputOunces.value=(valNum*16).toFixed(2);
          inputGrams.value=(valNum/0.0022046).toFixed();
          inputStones.value=(valNum*0.071429).toFixed(3);
        }
        if (source==="inputKilograms") {
          inputPounds.value=(valNum*2.2046).toFixed(2);
          inputOunces.value=(valNum*35.274).toFixed(2);
          inputGrams.value=(valNum*1000).toFixed();
          inputStones.value=(valNum*0.1574).toFixed(3);
        }
        if (source==="inputOunces") {
          inputPounds.value=(valNum*0.062500).toFixed(4);
          inputKilograms.value=(valNum/35.274).toFixed(4);
          inputGrams.value=(valNum/0.035274).toFixed(1);
          inputStones.value=(valNum*0.0044643).toFixed(4);
        }
        if (source==="inputGrams") {
          inputPounds.value=(valNum*0.0022046).toFixed(4);
          inputKilograms.value=(valNum/1000).toFixed(4);
          inputOunces.value=(valNum*0.035274).toFixed(3);
          inputStones.value=(valNum*0.00015747).toFixed(5);
        }
        if (source==="inputStones") {
          inputPounds.value=(valNum*14).toFixed(1);
          inputKilograms.value=(valNum/0.15747).toFixed(1);
          inputOunces.value=(valNum*224).toFixed();
          inputGrams.value=(valNum/0.00015747).toFixed();
        }
      
      }
  return (
    <div className='container'>

        <div className='flex flex-col items-center justify-center' data-aos='fade-in' data-aos-delay='100'>
            <img className='img-shadow2' src={weightImg} alt="Not Found" />
            <h1 className='text-4xl text-white font-bold my-5 text-shadow' >Weight Converter</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-top  gap-8">
                   
                        <div className='text-white mt-[100px] md:mt-0 p-4 space-y-4'>
                          <div data-aos='fade-up' data-aos-delay='200'>
                            <label>Pounds</label>
                            <input id='inputPounds' className='input-style w-full' onInput={weightConversion} placeholder='0 lb' type="number"/>
                          </div>
                          <div data-aos='fade-up' data-aos-delay='300'>
                            <label>Ounces</label>
                            <input id='inputOunces' className='input-style w-full' onInput={weightConversion} type="number"  placeholder='0 oz'/>
                          </div>
                        </div>
                        <div className='text-white mt-[100px] md:mt-0 p-4 space-y-4'>
                        <div data-aos='fade-up' data-aos-delay='200'>
                            <label>Grams</label>
                            <input id='inputGrams' className='input-style w-full' onInput={weightConversion} type="number"  placeholder='0 g'/>
                          </div>
                        <div data-aos='fade-up' data-aos-delay='300'>
                            <label>Kilograms</label>
                            <input id='inputKilograms' className='input-style w-full' onInput={weightConversion} placeholder='0 kg'  type="number"/>
                          </div>
                        </div>
                        <div className='text-white mt-[100px] md:mt-0 p-4 space-y-4'>
                        <div data-aos='fade-up' data-aos-delay='200'>
                            <label>Stones</label>
                            <input id='inputStones' className='input-style w-full' onInput={weightConversion} placeholder='0 st'  type="number"/>
                          </div>
                        </div>
                        </div>
    </div>
  )
}

export default WeightConverter