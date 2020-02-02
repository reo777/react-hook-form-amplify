import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import {authConfig} from './config/env';
import ScrollToTop from 'react-router-scroll-top';
import {Provider} from 'react-redux';
import {store} from './redux';
import {BrowserRouter as Router} from 'react-router-dom';
import '@shopify/polaris/styles.css';
import {AppProvider} from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import {VFXProvider} from 'react-vfx';

import 'semantic-ui-css/semantic.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './styles/index.scss';

import * as serviceWorker from './serviceWorker';
import Routes from './routes';

const config = authConfig;
Amplify.configure(config);

ReactDOM.render(
  <AppProvider i18n={enTranslations}>
    <Provider store={store}>
      <Router>
        <ScrollToTop>
          <Routes />
        </ScrollToTop>
      </Router>
    </Provider>
  </AppProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
