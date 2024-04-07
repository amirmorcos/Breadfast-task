import {PostCard} from 'molecules/index';
import React from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';
import CommentsList from 'organisms/commentsList';

const PostDetails = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}>
      <PostCard onPress={() => {}} />
      <CommentsList />
    </ScrollView>
  );
};

export default PostDetails;
