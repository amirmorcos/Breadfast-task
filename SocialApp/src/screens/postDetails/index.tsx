import {PostCard} from 'molecules/index';
import React from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';
import CommentsList from 'organisms/commentsList';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MainStackParamsList} from 'navigation/mainStack/types';

const PostDetails = () => {
  const route = useRoute<RouteProp<MainStackParamsList, 'PostDetails'>>();
  const {post} = route.params;
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: 'white'}}
      contentContainerStyle={styles.scrollViewContent}>
      <PostCard
        showFullBody
        body={post.body}
        name={post.name}
        title={post.title}
      />
      <CommentsList />
    </ScrollView>
  );
};

export default PostDetails;
