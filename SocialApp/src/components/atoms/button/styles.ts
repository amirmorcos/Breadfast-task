import {StyleSheet} from 'react-native';
import {vs} from 'react-native-size-matters';
import Colors from 'themes/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.RED,
    height: vs(48),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.WHITE,
  },
});
