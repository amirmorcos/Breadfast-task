import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ButtonProps} from './types';
import styles from './styles';

const Button = ({onPress, title, overrideContainerStyle}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, overrideContainerStyle]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
