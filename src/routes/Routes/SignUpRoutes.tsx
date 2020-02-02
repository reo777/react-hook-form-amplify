import React from 'react';
import {Route} from 'react-router-dom';

import {SignUp} from './../../pages';
import paths from './../../config/paths';

const SignUpRoutes: React.FC = () => {
  return (
    <>
      <Route path={paths.SignUp.main} component={SignUp.Main} exact />
      <Route path={paths.SignUp.confirm} component={SignUp.Confirm} exact />
    </>
  );
};

export default SignUpRoutes;
