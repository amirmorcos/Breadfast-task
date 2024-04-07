import {PostsList} from 'organisms/index';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <PostsList data={[1, 2, 3]} />
    </View>
  );
};

export default HomeScreen;
