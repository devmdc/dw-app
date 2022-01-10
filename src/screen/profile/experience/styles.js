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
  header: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  textInfo: {
    textAlign: 'center',
  },
  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: colors.dwLightGrey,
  },
  list: {
    flex: 1,
    backgroundColor: colors.dwSoftGrey,
  },
  wrapperContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 11,
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
