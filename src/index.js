import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Router from './components/Routes';

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

ReactDOM.render(<App />, document.getElementById('root'));
