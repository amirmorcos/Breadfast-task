import {StyleSheet} from 'react-native';
import {s, vs} from 'react-native-size-matters';
import Colors from 'themes/colors';

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
    backgroundColor: Colors.BLACK,
    marginTop: vs(10),
    borderRadius: s(6),
  },
  body: {
    marginTop: vs(5),
  },
  title: {
    marginVertical: vs(10),
  },
});
