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
  scrollViewContent: {
    padding: 16,
    paddingBottom: 26,
  },
  wrapperStatus: {
    height: 32,
    backgroundColor: colors.dwMainColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperSection: {
    borderRadius: 10,
    backgroundColor: colors.dwWhite,
    padding: 16,
  },
  wrapperProfile: {
    height: 72,
    width: 72,
    backgroundColor: colors.dwWhite,
    position: 'absolute',
    top: -36,
    borderRadius: 36,
    alignSelf: 'center',
  },
  textTitle: {
    alignSelf: 'center',
    color: colors.dwGrey,
    textTransform: 'capitalize',
  },
  textStatus: {
    color: colors.dwWhite,
    textTransform: 'capitalize',
  },
  imageProfile: {
    width: 72,
    height: 72,
    alignSelf: 'center',
  },
  imageVacan: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  line: {
    height: 0.5,
    backgroundColor: colors.dwLine,
    width: '100%',
  },
  wrapperFooter: {
    height: 128,
    backgroundColor: colors.dwWhite,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
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
  shadowImage: {
    shadowColor: colors.dwGrey,
    shadowOffset: {
      width: 0.5,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 3.0,
  },
  shadowFooter: {
    shadowColor: colors.dwGrey,
    shadowOffset: {
      width: 0.5,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.0,
  },
});
