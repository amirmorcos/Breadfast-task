import React from 'react';
import {Avatar} from 'atoms/index';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {PostCardProps} from './types';

const PostCard = ({onPress, overrideContainerStyle}: PostCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={overrideContainerStyle}>
      <View style={styles.avatarContainer}>
        <Avatar image="" name="Amir Morcos" />
        <View style={styles.nameContainer}>
          <Text>Melissa Berry</Text>
          <Text>10 mins</Text>
        </View>
      </View>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
        TITLE
      </Text>
      <Text style={styles.body} numberOfLines={3} ellipsizeMode="tail">
        Body of the post{' '}
      </Text>
    </TouchableOpacity>
  );
};

export default PostCard;
