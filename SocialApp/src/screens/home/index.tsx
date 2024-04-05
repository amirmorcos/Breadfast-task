import React from 'react';
import {View} from 'react-native';
import {PostsList} from 'organisms/index';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <PostsList />
    </View>
  );
};

export default HomeScreen;
