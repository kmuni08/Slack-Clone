import React, { FunctionComponent, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Auth: FunctionComponent<any> = () => {

  const navigate = useNavigate();

  useEffect(() => {
    // if (true) {
    //   setTimeout(() => {
    //     console.log('hey you are not allow, navigate back to home!');
    //     navigate('/');
    //   }, 2000)
    //
    // }
  }, [navigate])

  return (
    <div>
      <p>Auth Here!!!!</p>
      <Outlet/>
    </div>
  );
}

export default Auth;