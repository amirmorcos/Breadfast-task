import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    width: scale(32),
    height: scale(32),
    borderRadius: scale(16),
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});