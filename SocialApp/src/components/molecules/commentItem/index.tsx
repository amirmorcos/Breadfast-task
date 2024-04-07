import Avatar from 'atoms/avatar';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {CommentItemProps} from './types';

const CommentItem = ({name, body}: CommentItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar name={name} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.body}>
        <Text>{body}</Text>
      </View>
    </View>
  );
};

export default CommentItem;
