import React, {useState} from 'react';
import './UserS.scss'

const useLogin = () => {

  const [tokenAuth, setTokenAuth] = useState<boolean>(false)

  async function login() {

  }

  return tokenAuth;
}


const User = () =>{

  const [userID, setUserID] = useState<string>('')
  const [password, setPassword] = useState<string>('');

  return (
    <div>
      <img
      src="https://i.redd.it/ztsp15mljc861.jpg"
      className="user-profile-image"/>
    </div>
  )

}

export default User;