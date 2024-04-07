import {StyleSheet} from 'react-native';
import {s, vs} from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    marginTop: vs(15),
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginStart: s(10),
  },
  body: {
    height: 32,
    backgroundColor: 'blue',
    marginTop: vs(10),
  },
});
