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
  infoText: {
    textAlign: 'center',
  },
  otp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputContainerStyles: {
    backgroundColor: 'white',
    width: 48,
    height: 48,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E2E4E7',
  },
  inputStyles: {
    color: 'black',
    textAlign: 'center',
    width: 48,
    height: 48,
    alignSelf: 'center',
  },
});
