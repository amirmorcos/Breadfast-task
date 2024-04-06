import React, {forwardRef, useCallback, useMemo} from 'react';
import {Text} from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetBackdropProps,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import styles from './styles';

export const CommentsModal = forwardRef<BottomSheetModal>((props, ref) => {
  const snapPoints = useMemo(() => ['25%', '50%'], []);

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
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});
