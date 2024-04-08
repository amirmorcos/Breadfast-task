import {StyleSheet} from 'react-native';
import {vs} from 'react-native-size-matters';
import Colors from 'themes/colors';

export default StyleSheet.create({
  commentsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vs(15),
  },
  viewAll: {
    textDecorationLine: 'underline',
    color: Colors.RED,
  },
  divider: {
    marginTop: vs(20),
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
