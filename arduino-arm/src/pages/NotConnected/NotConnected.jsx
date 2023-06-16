import './NotConnected.scss';

import errorGif from '../../assets/images/cat-kitten.gif'

import {selectDevice} from '../../hooks/SerialController';

export default function NotConnected({changeDevice, className}) {
  async function handleClick() {
    let device = await selectDevice();
    changeDevice(device);
  }

  return (
    <div className={'notconnected-container ' + className}>
      <img src={errorGif} />
      <h1>Uh oh, you aren't connected to a device yet.</h1>
      <button onClick={handleClick}>
        Connect device +
      </button>
    </div>
  );
}