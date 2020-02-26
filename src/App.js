/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {connect} from 'react-redux';
import {StatusBar} from 'react-native';
import Routes from './routes';

const App = () => {
  return <Routes />;
};

export default connect(
  null,
  null,
)(App);
