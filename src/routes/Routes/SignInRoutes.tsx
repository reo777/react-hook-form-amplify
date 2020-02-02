import React from 'react';
import {Route} from 'react-router-dom';

import {SignIn} from './../../pages';
import paths from './../../config/paths';

const SignInRoutes: React.FC = () => {
  return (
    <>
      <Route path={paths.SignIn.main} component={SignIn.Main} />
    </>
  );
};

export default SignInRoutes;
