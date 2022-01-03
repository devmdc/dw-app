import {StyleSheet} from 'react-native';
import {colors} from 'assets';

export function setMarginTop(number) {
  return {marginTop: number};
}

export function setMarginHorizontal(margin, number) {
  return {margin: number};
}

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  wrapperProfile: {
    backgroundColor: colors.dwWhite,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 16,
  },
  textInfo: {
    textAlign: 'center',
  },
  marginT: {
    marginTop: 10,
  },
  imgProfile: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  txtName: {
    marginVertical: 15,
    textTransform: 'uppercase',
  },
  shadowNavbar: {
    shadowColor: colors.dwGrey,
    shadowOffset: {
      width: 0.5,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.0,
  },
});
