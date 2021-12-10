import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import Landing from './App/Landing/Landing';
import './indexS.scss';

ReactDOM.render (

  <StrictMode>
    <div className='App'>
      <Landing />
    </div>

  </StrictMode>,

  document.getElementById('root')

);