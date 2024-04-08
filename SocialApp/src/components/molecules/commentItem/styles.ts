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
    marginTop: vs(10),
  },
});
