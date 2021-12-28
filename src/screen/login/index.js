import React, {useState, useEffect} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Container, Button, Text, Input} from 'component';
import {colors, images} from 'assets';
import {validate} from 'utils';

import styles, {setMarginTop, setMarginHorizontal} from './styles';

import useLogin from './useLogin';

const LoginScreen = ({navigation}) => {
  const [initial, setInitial] = useState(true);
  const {loading, submit, configGoogle, googleAuth} = useLogin();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailError = validate('email', email);
  const passError = validate('password', password);

  useEffect(() => {
    configGoogle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              onChangeTextValue={text => {
                setInitial(false);
                setEmail(text);
              }}
              isError={emailError !== null && !initial}
            />
            <Input
              password={true}
              placeholder={'Type password'}
              style={setMarginTop(15)}
              onChangeTextValue={text => {
                setInitial(false);
                setPassword(text);
              }}
              isError={passError !== null && !initial}
            />
          </View>
          <Button
            style={styles.button}
            onPress={() => {
              setInitial(false);
              if (emailError === null && passError === null) {
                submit(email, password);
              }
            }}
            loading={loading}>
            Login
          </Button>
          <View style={[styles.middleWrpaper, setMarginTop(50)]}>
            <Text fontSize={13}>Belum jadi member? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text fontSize={13} semibold>
                Register di sini
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.middleWrpaper, setMarginTop(20)]}>
            <Text fontSize={13}>Lupa password kamu? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
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
            <TouchableOpacity onPress={googleAuth}>
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
                  setMarginHorizontal('marginRight', 10),
                ]}
                source={images.loginFB}
                resizeMode={'cover'}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                style={[
                  styles.imageSocmed,
                  setMarginHorizontal('marginLeft', 10),
                ]}
                source={images.loginApple}
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
