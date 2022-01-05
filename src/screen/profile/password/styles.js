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
    alignSelf: 'flex-end',
  },
  middleWrpaper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputWrapper: {
    flex: 1,
    marginTop: 25,
    marginBottom: 10,
    width: '100%',
  },
  marginT: {
    marginTop: 10,
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
  shadowNavbar: {
    shadowColor: colors.dwGrey,
    shadowOffset: {
      width: 0.5,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.0,
  },
  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: colors.dwLightGrey,
  },
  eye: {
    width: 21,
    height: 21,
  },
});
