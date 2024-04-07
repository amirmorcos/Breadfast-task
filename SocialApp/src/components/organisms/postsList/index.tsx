import {Divider} from 'atoms/index';
import {PostCard} from 'molecules/index';
import React, {useCallback} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useAppNavigation} from '../../../hooks/useAppNavigation';
import styles from './styles';
import {PostsListProps} from './types';
import Button from 'atoms/button';

const PostsList = ({data, onRetry}: PostsListProps) => {
  const {navigate} = useAppNavigation();

  const renderItemSeparatorComponent = useCallback(
    () => <Divider overrideContainerStyle={styles.separator} />,
    [],
  );

  const renderEmptyComponent = useCallback(() => {
    return (
      <View style={styles.emptyContainer}>
        <Text>No Posts yet</Text>
        <Button
          overrideContainerStyle={styles.button}
          title="Try again"
          onPress={onRetry}
        />
      </View>
    );
  }, [onRetry]);

  return (
    <FlatList
      ListEmptyComponent={renderEmptyComponent}
      renderItem={({item}) => (
        <PostCard
          body={item.body}
          name={item.name}
          title={item.title}
          onPress={() => {
            navigate('PostDetails', {post: item});
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
