import React, {useState, useEffect} from "react";
import './LandingS.scss';
import GPS from "../GPS/GPS";
import User from '../User/User'



interface IProps {

}



const Landing: React.FC = () => {




  return (
    <div className='landing-Page'>
     <h1 className='application-Name'> Brandon Routes V.0.01 </h1>
      <div className="user">
          <User/>
      </div>

      <div className="gps-map">
          <GPS />
      </div>

    </div>
  )
}

export default Landing;