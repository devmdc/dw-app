import React from 'react';
import {View, Image} from 'react-native';
import {Button} from 'component';
import {colors, images} from 'assets';

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
      <View style={styles.buttonWrapper}>
        <Button style={styles.button} color={colors.dwLightBlue}>
          Register
        </Button>
        <Button style={styles.button}>Login</Button>
      </View>
    </View>
  );
};

export default WelcomeScreen;
