import './Connected.scss';

import { useState, useEffect } from 'react';

import { write } from '../../hooks/SerialController';

import Slider from '../../components/Slider/Slider';

export default function Connected({device, className}) {

  const [posArray, changePos] = useState([90,120,180,0,0,170]);

  useEffect(() => {
    if (device == null) {
      return;
    }
    const timeout = setTimeout(() => {
      write(device, 'WRITE'+posArray.toString());
    }, 600);
    return () => {
      clearTimeout(timeout);
    };
  }, [posArray]);

  function handleReset() {
    console.log("Resetting..");
    changePos([90,120,180,0,0,170])
  }

  return (
    <div className={'connected-container ' + className}>
      <div className='controls pane'>
          <h2>Controls</h2>
          <Slider changePos={changePos} posArray={posArray} label={"Waist"} idx={0}/>
          <Slider changePos={changePos} posArray={posArray} label={"Shoulder"} idx={1}/>
          <Slider changePos={changePos} posArray={posArray} label={"Elbow"} idx={2}/>
          <Slider changePos={changePos} posArray={posArray} label={"Wrist Roll"} idx={3}/>
          <Slider changePos={changePos} posArray={posArray} label={"Wrist Pitch"} idx={4}/>
          <Slider changePos={changePos} posArray={posArray} label={"Claw"} max={90} idx={5}/>
          <p className='reset' onClick={handleReset}>RESET</p>
      </div>
      {/* <div className='monitor pane'>
      </div> */}
    </div>
  );
}