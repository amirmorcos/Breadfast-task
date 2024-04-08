import {StyleSheet} from 'react-native';
import {vs} from 'react-native-size-matters';

export default StyleSheet.create({
  content: {
    paddingBottom: vs(30),
  },
  separator: {
    marginVertical: vs(15),
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: vs(10),
  },
});
