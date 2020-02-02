import paths from './../../config/paths';

import {SignInRoutes, SignUpRoutes} from '../Routes';

const routing: AppRoute[] = [
  {
    path: paths.SignIn.main,
    component: SignInRoutes,
    exact: true,
  },
  {
    path: paths.SignUp.main,
    component: SignUpRoutes,
    exact: false,
  },
];

export default routing;
