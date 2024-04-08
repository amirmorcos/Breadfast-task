import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {CommentItem, CommentsModal} from 'molecules/index';
import React, {useCallback, useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {CommentsListProps} from './types';
import Divider from 'atoms/divider';

const CommentsList = ({comments}: CommentsListProps) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const displayedComments = comments.slice(0, 2);

  if (!comments.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text>No Comments found</Text>
      </View>
    );
  }

  return (
    <>
      <View style={styles.commentsContainer}>
        <Text>{comments.length} comment(s)</Text>
        {comments.length > 1 && (
          <TouchableOpacity onPress={handlePresentModalPress}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        )}
      </View>
      {displayedComments.map((item, index) => (
        <React.Fragment key={item.id}>
          <CommentItem body={item.body} name={item.name} />
          {index < displayedComments.length - 1 && (
            <Divider overrideContainerStyle={styles.divider} />
          )}
        </React.Fragment>
      ))}
      <CommentsModal ref={bottomSheetModalRef} comments={comments} />
    </>
  );
};

export default CommentsList;
