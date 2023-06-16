import './Slider.scss'

import { useCallback } from 'react';

export default function Slider({className, changePos, posArray, idx, label, min, max}) {

  function handleChange(event) {
    let newArr = [...posArray];
    newArr[idx] = Math.min(Math.max(event.target.value, 0), 180);
    changePos(newArr);
  };

  return (
    <div className={'slider-container ' + className}>
      <label><i>{label}</i></label><span>{posArray[idx]}</span>
      
      <div className='slider'>
        <input
          type='range'
          min={min || 0}
          max={max || 180}
          value={posArray[idx]}
          onInput={handleChange}
        />
      </div>
    </div>
  )
}