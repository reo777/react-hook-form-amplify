import React from 'react';
import ReactDOM from 'react-dom';
import {Top} from './templates';
import Amplify, {Auth} from 'aws-amplify';
import {authConfig} from './config/env';
import ScrollToTop from 'react-router-scroll-top';
import {Provider} from 'react-redux';
import {store} from './redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {VFXProvider} from 'react-vfx';

import 'semantic-ui-css/semantic.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './styles/index.scss';
import * as serviceWorker from './serviceWorker';

const config = authConfig;
Amplify.configure(config);

ReactDOM.render(
  <VFXProvider>
    <Provider store={store}>
      <Router>
        <ScrollToTop>
          <Top.Main />
        </ScrollToTop>
      </Router>
    </Provider>
  </VFXProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
