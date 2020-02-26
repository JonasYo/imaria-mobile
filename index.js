/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';

import App from './src/App';

import store from './src/redux/store';

const Imaria = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Imaria);
