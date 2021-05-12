import React, { FunctionComponent } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import Landing from '../components/landing/Landing';
import SignIn from '../components/auth/sign-in/SignIn';
import SignUp from '../components/auth/sign-up/SignUp';
import Auth from '../components/auth/Auth';

const AppRoutes: FunctionComponent<any> = () => {

  const elements = useRoutes([
    { path: '/', element: <Landing/>  },
    {
      path: '/auth/*',
      element: <Auth/>,
      children: [
        { path: '/sign-in', element: <SignIn/> },
        { path: '/sign-up', element: <SignUp/> },
        { path: '/*', element: <Navigate to={'/auth/sign-in'}/> }
      ],
    }
  ]);

  return elements;
}

export default AppRoutes;
