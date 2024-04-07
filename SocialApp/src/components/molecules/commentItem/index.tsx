import Avatar from 'atoms/avatar';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const CommentItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar name="Amir Morcos" />
        <Text style={styles.name}>Amir</Text>
      </View>
      <View style={styles.body} />
    </View>
  );
};

export default CommentItem;
