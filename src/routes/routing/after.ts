import paths from './../../config/paths';
import {TopRoutes} from '../Routes';

const routing: AppRoute[] = [
  {
    path: paths.Top.main,
    component: TopRoutes,
    exact: true,
  },
];

export default routing;
