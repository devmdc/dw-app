import {StyleSheet} from 'react-native';

export function setMarginTop(number) {
  return {marginTop: number};
}

export function setMarginHorizontal(margin, number) {
  return {margin: number};
}

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 84,
  },
  contentList: {
    padding: 16,
  },
  textInfo: {
    textAlign: 'center',
  },
});
