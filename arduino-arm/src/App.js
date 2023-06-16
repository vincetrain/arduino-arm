import './App.scss';

import NotConnected from './pages/NotConnected/NotConnected';

import { useState } from 'react';
import Connected from './pages/Connected/Connected';


export default function App() {
	const [device, changeDevice] = useState();

	return (
		<div className="App">
      <NotConnected className={device == null ? 'visible' : 'hidden'} changeDevice={changeDevice}/>
      <Connected className={device == null ? 'hidden' : 'visible'} device={device}/>
    </div>
	);
}
