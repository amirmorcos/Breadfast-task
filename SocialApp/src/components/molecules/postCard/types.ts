import {StyleProp, ViewStyle} from 'react-native';

export type PostCardProps = {
  onPress: () => void;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};
