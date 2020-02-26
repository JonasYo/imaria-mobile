import React from 'react';

import {View} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// import { Container } from './styles';

const SignIn = () => {
  return (
    <div>
      <View />
    </div>
  );
};

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(SignIn);
