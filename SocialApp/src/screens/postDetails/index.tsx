import {RouteProp, useRoute} from '@react-navigation/native';
import LoadingSpinner from 'atoms/loadingSpinner';
import {PostCard} from 'molecules/index';
import {MainStackParamsList} from 'navigation/mainStack/types';
import {CommentsList} from 'organisms/index';
import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from 'store/index';
import {fetchCommentsList} from 'store/postsSlice';
import styles from './styles';

const PostDetails = () => {
  const route = useRoute<RouteProp<MainStackParamsList, 'PostDetails'>>();
  const {comments, loading} = useSelector(
    (state: RootState) => state.postsList,
  );
  const dispatch = useAppDispatch();
  const {post} = route.params;

  useEffect(() => {
    dispatch(fetchCommentsList(post.id));
  }, [dispatch, post.id]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollViewContent}>
      <PostCard
        showFullBody
        body={post.body}
        name={post.name}
        title={post.title}
      />
      {loading ? <LoadingSpinner /> : <CommentsList comments={comments} />}
    </ScrollView>
  );
};

export default PostDetails;
