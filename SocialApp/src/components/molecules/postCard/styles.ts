import {StyleSheet} from 'react-native';
import {s, vs} from 'react-native-size-matters';

export default StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameContainer: {
    marginStart: s(8),
  },
  card: {
    width: '100%',
    height: vs(160),
    backgroundColor: 'black',
    marginTop: vs(10),
    borderRadius: s(6),
  },
  body: {
    marginTop: vs(5),
  },
});
