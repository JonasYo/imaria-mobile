import React from 'react';
import PropTypes from 'prop-types';

import { TextInput, TextInputProps } from 'react-native';

import styles from './styles';

const FormTextInput = props => {
  return (
    <TextInput
      style={[styles.TextInput, props.style]}
      placeholder={props.placeholder}
      secureTextEntry={props.password}
      autoCorrect={false}
      autoCapitalize="none"
      {...props.otherProps}
    />
  );
};

export default FormTextInput;

FormTextInput.propTypes = {
  onPress: PropTypes.func,
  label: PropTypes.string,
  password: PropTypes.bool
};
