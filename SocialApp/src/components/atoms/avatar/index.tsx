import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import {AvatarProps} from './types';

const Avatar = ({image, name}: AvatarProps) => {
  const nameSeparated = name.split(' ');
  const initials = `${nameSeparated[0]
    ?.substring(0, 1)
    ?.toUpperCase()} ${nameSeparated[1]?.substring(0, 1).toUpperCase()}`;

  if (!image) {
    return (
      <View style={styles.container}>
        <Text>{initials}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} />
    </View>
  );
};

export default Avatar;
