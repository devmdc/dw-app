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
  },
  scroll: {
    width: '100%',
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    padding: 25,
  },
  logoTitle: {
    width: 190,
    height: 190 * (108 / 190),
    marginTop: 75,
  },
  button: {
    width: '100%',
    height: 48,
    marginTop: 20,
  },
  middleWrpaper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputWrapper: {
    marginTop: 25,
    marginBottom: 10,
    width: '100%',
  },
});
