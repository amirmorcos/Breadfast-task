import {Divider} from 'atoms/index';
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
      renderItem={({item}) => (
        <PostCard
          body={item.body}
          name={item.name}
          title={item.title}
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
