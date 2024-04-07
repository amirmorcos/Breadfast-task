import {StyleSheet} from 'react-native';
import {s} from 'react-native-size-matters';
import Colors from 'themes/colors';

export default StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    padding: s(10),
    backgroundColor: Colors.WHITE,
  },
  scrollContainer: {
    backgroundColor: Colors.WHITE,
  },
});
