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
  contentList: {
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
  textInfo: {
    textAlign: 'center',
  },
});
