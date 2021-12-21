import React from 'react';
import {View, Image} from 'react-native';
import {images} from 'assets';

import styles from './styles';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={images.logoTitle}
        style={styles.logoTitle}
        resizeMode={'contain'}
      />
      <Image
        source={images.monas}
        style={styles.imageMonas}
        resizeMode={'contain'}
      />
    </View>
  );
};

export default WelcomeScreen;
