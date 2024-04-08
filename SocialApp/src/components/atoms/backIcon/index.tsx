import React from 'react';
import {Image} from 'react-native';
import Images from 'themes/images';
import styles from './styles';

const BackIcon = () => {
  return <Image source={Images.backIcon} style={styles.image} />;
};

export default BackIcon;
