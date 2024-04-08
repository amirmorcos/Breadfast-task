import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import Divider from 'atoms/divider';
import {CommentItem} from 'molecules/index';
import React, {forwardRef, useCallback, useMemo} from 'react';
import {Text} from 'react-native';
import styles from './styles';
import {CommentsModalProps} from './types';

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

    const renderItemSeparatorComponent = () => (
      <Divider overrideContainerStyle={styles.separator} />
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
            ItemSeparatorComponent={renderItemSeparatorComponent}
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
