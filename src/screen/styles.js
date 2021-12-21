import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  logoTitle: {
    width: 225,
    height: 225 * (128 / 225),
    position: 'absolute',
    left: Dimensions.get('window').width / 2 - 225 / 2,
    top: 136 - 0,
    zIndex: 1,
  },
  imageMonas: {
    width: Dimensions.get('window').width,
    height:
      Dimensions.get('window').width * (433 / Dimensions.get('window').width),
    position: 'absolute',
    top: 279 - 0,
    left: 0,
    zIndex: 0,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 50,
    left: 25,
    right: 25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    width: 154,
    height: 48,
  },
});
