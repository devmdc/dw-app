import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    // padding: 25,
    // flex: 1,
  },
  logoTitle: {
    width: 225,
    height: 128,
    position: 'absolute',
    left: Dimensions.get('window').width / 2 - 225 / 2,
    top: 136 - 0,
    zIndex: 1,
  },
  imageMonas: {
    width: Dimensions.get('window').width,
    height: 433,
    position: 'absolute',
    top: 279 - 0,
    left: 0,
    zIndex: 0,
  },
});
