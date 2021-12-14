import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import Landing from './App/Landing/Landing';
import './indexS.scss';
import 'mapbox-gl/dist/mapbox-gl.css'


ReactDOM.render (

  <StrictMode>
    <div className='App'>
      <Landing />
    </div>

  </StrictMode>,

  document.getElementById('root')

);