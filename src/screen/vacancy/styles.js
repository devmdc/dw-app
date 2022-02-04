import {StyleSheet} from 'react-native';
import {colors} from 'assets';

export function setMarginTop(number) {
  return {marginTop: number};
}

export function setMarginHorizontal(number) {
  return {marginHorizontal: number};
}

export function setMarginRight(number) {
  return {marginRight: number};
}

export function setFlex(number) {
  return {flex: number};
}

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dwSoftGrey,
    padding: 16,
  },
  scrolView: {
    backgroundColor: colors.dwSoftGrey,
    marginBottom: 64,
  },
  headerWrapper: {
    backgroundColor: colors.dwWhite,
    padding: 16,
    borderRadius: 10,
  },
  sectionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInfo: {
    textAlign: 'center',
    color: colors.dwBlue,
    marginBottom: 20,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
    alignItems: 'center',
  },
  inputDisable: {
    backgroundColor: colors.dwWhite,
  },
  inputDateStart: {
    backgroundColor: colors.dwWhite,
  },
  icInput: {
    width: 16,
    height: 16,
  },
  button: {
    height: 48,
  },
  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: colors.dwLightGrey,
  },
  contentList: {
    paddingVertical: 16,
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
  shadowContent: {
    shadowColor: colors.dwGrey,
    shadowOffset: {
      width: 0.5,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.0,
  },
});
