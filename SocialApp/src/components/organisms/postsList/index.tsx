import Divider from 'atoms/divider';
import {PostCard} from 'molecules/index';
import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {useAppNavigation} from '../../../hooks/useAppNavigation';
import styles from './styles';
import {PostsListProps} from './types';

const PostsList = ({data}: PostsListProps) => {
  const {navigate} = useAppNavigation();

  const renderItemSeparatorComponent = useCallback(
    () => <Divider overrideContainerStyle={styles.separator} />,
    [],
  );

  return (
    <FlatList
      renderItem={() => (
        <PostCard
          onPress={() => {
            navigate('PostDetails');
          }}
        />
      )}
      data={data}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={renderItemSeparatorComponent}
      contentContainerStyle={styles.content}
    />
  );
};

export default PostsList;
