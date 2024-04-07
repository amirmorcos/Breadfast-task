import {LoadingSpinner} from 'atoms/index';
import {PostsList} from 'organisms/index';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from 'store/index';
import {fetchPostsList} from 'store/postsSlice';
import styles from './styles';

const HomeScreen = () => {
  const {posts, loading} = useSelector((state: RootState) => state.postsList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPostsList());
  }, [dispatch]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <View style={styles.container}>
      <PostsList data={posts} />
    </View>
  );
};

export default HomeScreen;
