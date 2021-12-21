import {Dimensions, StyleSheet} from 'react-native';

export function setMarginTop(number) {
  return {marginTop: number};
}

export function setMarginHorizontal(margin, number) {
  return {margin: number};
}

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    alignItems: 'center',
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
  line: {
    marginTop: 30,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  imageDevider: {
    flex: 1,
  },
  socmedWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  imageSocmed: {
    width: 60,
    height: 60,
  },
  inputWrapper: {
    marginTop: 50,
    marginBottom: 10,
    width: '100%',
  },
});
