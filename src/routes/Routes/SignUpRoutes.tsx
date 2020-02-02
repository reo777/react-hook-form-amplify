import React from 'react';
import {Route} from 'react-router-dom';

import {SignUp} from './../../pages';
import paths from './../../config/paths';

const SignUpRoutes: React.FC = () => {
  return (
    <>
      <Route path={paths.SignUp.main} component={SignUp.Main} />
    </>
  );
};

export default SignUpRoutes;
