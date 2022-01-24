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
    backgroundColor: colors.dwSoftGrey,
  },
  wrapper: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.dwWhite,
  },
  wrapperList: {
    flex: 1,
  },
  contentList: {
    padding: 16,
  },
  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: colors.dwLightGrey,
  },
  imgInput: {
    width: 15,
    height: 15,
  },
  textInfo: {
    textAlign: 'center',
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
