import React from 'react';
import ReactDOM from 'react-dom';
import {Form} from './templates';
import 'semantic-ui-css/semantic.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './styles/index.scss';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Form.Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
