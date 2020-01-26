import {Middleware} from 'redux';

import promise from './useReduxPromiseMiddleware';

const env = 'development';

let middlewares: Middleware[] = [];
if (env === 'development') {
  middlewares = [promise];
} else {
  middlewares = [promise];
}

export default middlewares;
