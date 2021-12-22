import React from 'react';
import {View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Container, Button, Text, Input} from 'component';
import {colors, images} from 'assets';

import styles, {setMarginTop, setMarginHorizontal} from './styles';

import useLogin from './useLogin';

const LoginScreen = ({navigation}) => {
  const {loading, submit} = useLogin();

  return (
    <Container>
      <ScrollView style={styles.scroll}>
        <View style={styles.wrapper}>
          <Image
            source={images.logoTitle}
            style={styles.logoTitle}
            resizeMode={'contain'}
          />
          <View style={styles.inputWrapper}>
            <Input placeholder={'Type your email'} />
            <Input placeholder={'Type password'} style={setMarginTop(15)} />
          </View>
          <Button
            style={styles.button}
            onPress={() => submit()}
            loading={loading}>
            Login
          </Button>
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
              style={[
                styles.imageDevider,
                setMarginHorizontal('marginRight', 10),
              ]}
              source={images.divider}
              resizeMode={'cover'}
            />

            <Text fontSize={13} color={colors.dwMainColor} bold>
              OR YOU CAN LOGIN WITH
            </Text>

            <Image
              style={[
                styles.imageDevider,
                setMarginHorizontal('marginLeft', 10),
              ]}
              source={images.divider}
              resizeMode={'cover'}
            />
          </View>
          <View style={styles.socmedWrapper}>
            <TouchableOpacity>
              <Image
                style={[
                  styles.imageSocmed,
                  setMarginHorizontal('marginRight', 10),
                ]}
                source={images.loginGoogle}
                resizeMode={'cover'}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                style={[
                  styles.imageSocmed,
                  setMarginHorizontal('marginLeft', 10),
                ]}
                source={images.loginFB}
                resizeMode={'cover'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default LoginScreen;
