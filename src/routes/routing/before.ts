import paths from '@paths';
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
    exact: true,
  },
];

export default routing;
