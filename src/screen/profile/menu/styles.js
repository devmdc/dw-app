import {StyleSheet} from 'react-native';
import {colors} from 'assets';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.dwWhite,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 55,
    padding: 16,
    marginVertical: 5,
    borderRadius: 5,
  },
  contentContainer: {
    paddingBottom: 84,
  },
  txtName: {
    textTransform: 'capitalize',
    marginHorizontal: 10,
    flex: 1,
  },
  imgMenu: {
    width: 24,
    height: 24,
  },
  imgArrow: {
    width: 24,
    height: 24,
  },
});
