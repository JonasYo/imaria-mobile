import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const Button = (props) => {
  return (
    <TouchableHighlight onPress={props.onPress} style={styles.container}>
      <Text style={styles.text}>{props.label}</Text>
    </TouchableHighlight>
  );
};

export default Button;

Button.propTypes = {
  onPress: PropTypes.func,
  label: PropTypes.string,
};