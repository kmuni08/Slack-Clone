import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import AuthNav from './nav/AuthNav';

const Auth: FunctionComponent<any> = () => {

  return (
    <div>
      <AuthNav />
      <Outlet/>
    </div>
  );
}

export default Auth;