import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {AvatarProps} from './types';

const Avatar = ({name}: AvatarProps) => {
  const nameSeparated = name.split(' ');
  const initials = `${nameSeparated[0]
    ?.substring(0, 1)
    ?.toUpperCase()} ${nameSeparated[1]?.substring(0, 1).toUpperCase()}`;

  return (
    <View style={styles.container}>
      <Text>{initials}</Text>
    </View>
  );
};

export default Avatar;
