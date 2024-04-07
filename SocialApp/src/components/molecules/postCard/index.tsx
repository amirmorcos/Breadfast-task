import React from 'react';
import {Avatar} from 'atoms/index';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {PostCardProps} from './types';

const PostCard = ({
  onPress,
  body,
  name,
  title,
  overrideContainerStyle,
}: PostCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={overrideContainerStyle}>
      <View style={styles.avatarContainer}>
        <Avatar image="" name={name || ''} />
        <View style={styles.nameContainer}>
          <Text>{name}</Text>
        </View>
      </View>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
        {title}
      </Text>
      <Text style={styles.body} numberOfLines={3} ellipsizeMode="tail">
        {body}
      </Text>
    </TouchableOpacity>
  );
};

export default PostCard;
