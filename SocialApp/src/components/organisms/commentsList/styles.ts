import {StyleSheet} from 'react-native';
import {vs} from 'react-native-size-matters';

export default StyleSheet.create({
  commentsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vs(15),
  },
  viewAll: {
    textDecorationLine: 'underline',
    color: 'red',
  },
});
