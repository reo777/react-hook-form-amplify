import React from 'react';
import {Route} from 'react-router-dom';

import {Top} from './../../pages';
import paths from './../../config/paths';

const TopRoutes: React.FC = () => {
  return (
    <>
      <Route path={paths.Top.main} component={Top.Main} />
    </>
  );
};

export default TopRoutes;
