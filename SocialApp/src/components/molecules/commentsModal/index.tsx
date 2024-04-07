import React, {forwardRef, useCallback, useMemo} from 'react';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdropProps,
  BottomSheetBackdrop,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import {CommentsModalProps} from './types';
import {CommentItem} from 'molecules/index';
import styles from './styles';
import {Text} from 'react-native';

export const CommentsModal = forwardRef<BottomSheetModal, CommentsModalProps>(
  ({comments}, ref) => {
    const snapPoints = useMemo(() => ['25%', '75%'], []);

    const renderBackDrop = useCallback(
      (backdropProps: BottomSheetBackdropProps) => {
        return (
          <BottomSheetBackdrop
            {...backdropProps}
            opacity={0.5}
            pressBehavior={'close'}
          />
        );
      },
      [],
    );

    return (
      <BottomSheetModalProvider>
        <BottomSheetModal
          backdropComponent={renderBackDrop}
          ref={ref}
          index={1}
          snapPoints={snapPoints}>
          <Text style={styles.allComments}>All Comments</Text>
          <BottomSheetFlatList
            contentContainerStyle={styles.listContentContainer}
            data={comments}
            renderItem={({item}) => (
              <CommentItem body={item.body} name={item.name} />
            )}
          />
        </BottomSheetModal>
      </BottomSheetModalProvider>
    );
  },
);
