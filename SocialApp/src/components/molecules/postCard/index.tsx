import {Avatar} from 'atoms/index';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {PostCardProps} from './types';

const PostCard = ({
  onPress,
  body,
  name,
  title,
  overrideContainerStyle,
  showFullBody = false,
}: PostCardProps) => {
  const Container = onPress ? TouchableOpacity : View;

  return (
    <Container onPress={onPress} style={overrideContainerStyle}>
      <View style={styles.avatarContainer}>
        <Avatar name={name || ''} />
        <View style={styles.nameContainer}>
          <Text>{name}</Text>
        </View>
      </View>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
        {title}
      </Text>
      <Text
        style={styles.body}
        numberOfLines={!showFullBody ? 3 : undefined}
        ellipsizeMode="tail">
        {body}
      </Text>
    </Container>
  );
};

export default PostCard;
