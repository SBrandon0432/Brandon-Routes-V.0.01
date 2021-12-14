
import React, {useState} from 'react';


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
      User Profile
    </div>
  )

}

export default User;