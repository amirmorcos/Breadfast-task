import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {DividerProps} from './types';

const Divider = ({overrideContainerStyle}: DividerProps) => {
  return <View style={[styles.container, overrideContainerStyle]} />;
};

export default Divider;
