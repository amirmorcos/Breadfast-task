import {PostCard} from 'molecules/index';
import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';

const PostsList = () => {
  return (
    <FlatList
      renderItem={() => <PostCard onPress={() => {}} />}
      data={[1, 2, 3]}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      contentContainerStyle={styles.content}
    />
  );
};

export default PostsList;
