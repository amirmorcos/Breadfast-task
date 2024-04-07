import {StyleProp, ViewStyle} from 'react-native';

export type PostCardProps = {
  onPress: () => void;
  name: string;
  title: string;
  body: string;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};
