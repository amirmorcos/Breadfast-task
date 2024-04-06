import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {CommentItem, CommentsModal} from 'molecules/index';
import React, {useCallback, useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const CommentsList = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <>
      <View style={styles.commentsContainer}>
        <Text>21 comments</Text>
        <TouchableOpacity onPress={handlePresentModalPress}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <CommentItem />
      <CommentItem />
      <CommentsModal ref={bottomSheetModalRef} />
    </>
  );
};

export default CommentsList;
