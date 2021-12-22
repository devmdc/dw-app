import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Container, Button, Text, Input} from 'component';
import {colors, images} from 'assets';

import styles, {setMarginTop, setMarginHorizontal} from './styles';

import useLogin from './useLogin';

const LoginScreen = ({navigation}) => {
  const {loading, submit} = useLogin();

  const {email, setEmail} = useState('');
  const {password, setPassword} = useState('');

  return (
    <Container>
      <KeyboardAwareScrollView>
        <View style={styles.wrapper}>
          <Image
            source={images.logoTitle}
            style={styles.logoTitle}
            resizeMode={'contain'}
          />
          <View style={styles.inputWrapper}>
            <Input
              placeholder={'Type your email'}
              onChangeText={text => setEmail(text)}
            />
            <Input
              password={true}
              placeholder={'Type password'}
              style={setMarginTop(15)}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <Button
            style={styles.button}
            onPress={() => submit(email, password)}
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
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default LoginScreen;
