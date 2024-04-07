import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const BackIcon = () => {
  return (
    <Image
      source={require('../../../../assets/images/backIcon.png')}
      style={styles.image}
    />
  );
};

export default BackIcon;
