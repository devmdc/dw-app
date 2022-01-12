import {StyleSheet, Dimensions} from 'react-native';
import {colors} from 'assets';

export const width = Dimensions.get('screen').width;

export const sampleperiod = [
  {id: 1, name: 'Day'},
  {id: 2, name: 'Week'},
  {id: 3, name: 'Month'},
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
  header: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  textInfo: {
    textAlign: 'center',
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 16,
  },
  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: colors.dwLightGrey,
  },
  inputWrapper: {
    flex: 1,
    marginBottom: 10,
    padding: 16,
  },
  icInput: {
    width: 16,
    height: 16,
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
  menu: {
    width: width - 225,
    maxHeight: 300,
  },
  menuPos: {
    marginTop: 65,
    width: width - 32,
    maxHeight: 300,
  },
  menuCity: {
    marginTop: 65,
    width: width - 32,
    maxHeight: 300,
  },
  inputPosition: {
    backgroundColor: colors.dwWhite,
  },
  inputCity: {
    backgroundColor: colors.dwWhite,
  },
  inputPeriod: {
    width: width - 225,
    marginLeft: 5,
    backgroundColor: colors.dwWhite,
  },
  inputDateEnd: {
    flex: 1,
    marginLeft: 5,
    backgroundColor: colors.dwWhite,
  },
  inputDateStart: {
    flex: 1,
    marginLeft: 5,
    backgroundColor: colors.dwWhite,
  },
  button: {
    height: 48,
    marginHorizontal: 26,
    marginBottom: 26,
  },
});
