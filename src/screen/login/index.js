import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Button, Text} from 'component';
import {colors, images} from 'assets';

import styles, {setMarginTop, setMarginHorizontal} from './styles';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={images.logoTitle}
        style={styles.logoTitle}
        resizeMode={'contain'}
      />
      <Button style={styles.button}>Login</Button>
      <View style={[styles.middleWrpaper, setMarginTop(50)]}>
        <Text fontSize={13}>Belum punya akun? </Text>
        <TouchableOpacity>
          <Text fontSize={13} semibold>
            Register di sini
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.middleWrpaper, setMarginTop(20)]}>
        <Text fontSize={13}>Lupa password kamu? </Text>
        <TouchableOpacity>
          <Text fontSize={13} semibold>
            Klik di sini
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line}>
        <Image
          style={[styles.imageDevider, setMarginHorizontal('marginRight', 10)]}
          source={images.divider}
          resizeMode={'cover'}
        />

        <Text fontSize={13} color={colors.dwMainColor} bold>
          OR YOU CAN LOGIN WITH
        </Text>

        <Image
          style={[styles.imageDevider, setMarginHorizontal('marginLeft', 10)]}
          source={images.divider}
          resizeMode={'cover'}
        />
      </View>
      <View style={styles.socmedWrapper}>
        <TouchableOpacity>
          <Image
            style={[styles.imageSocmed, setMarginHorizontal('marginRight', 10)]}
            source={images.loginGoogle}
            resizeMode={'cover'}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={[styles.imageSocmed, setMarginHorizontal('marginLeft', 10)]}
            source={images.loginFB}
            resizeMode={'cover'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
