import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    width: scale(32),
    height: scale(32),
    borderRadius: scale(16),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
});
