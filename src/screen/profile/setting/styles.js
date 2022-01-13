import {StyleSheet, Dimensions} from 'react-native';
import {colors} from 'assets';

export const width = Dimensions.get('screen').width;

export const genderData = [
  {id: 1, name: 'Male'},
  {id: 2, name: 'Female'},
];

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
  wrapperPict: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePict: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 10,
  },
  profileText: {
    textAlign: 'center',
    color: colors.dwGrey,
  },
  button: {
    width: '100%',
    height: 48,
    alignSelf: 'flex-end',
  },
  infoText: {
    textAlign: 'center',
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
  icInput: {
    width: 16,
    height: 16,
  },
  inputDisable: {
    marginTop: 10,
    backgroundColor: colors.dwWhite,
  },
  menu: {
    marginTop: 65,
    width: width - 50,
    maxHeight: 180,
  },
});
