import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Container, Button, Text, Input} from 'component';
import {images} from 'assets';
import {validate} from 'utils';

import styles, {setMarginTop} from './styles';
import useRegister from './useRegister';

const RegisterScreen = ({navigation}) => {
  const {loading, submit} = useRegister();

  const [initial, setInitial] = useState(true);
  const [email, setEmail] = useState('');

  const emailError = validate('email', email);

  return (
    <Container>
      <KeyboardAwareScrollView>
        <View style={styles.wrapper}>
          <Image
            source={images.logoTitle}
            style={styles.logoTitle}
            resizeMode={'contain'}
          />
          <Text style={setMarginTop(50)} fontSize={13}>
            Daftar dengan alamat email kamu
          </Text>
          <View style={styles.inputWrapper}>
            <Input
              placeholder={'Type your email'}
              onChangeTextValue={text => {
                setInitial(false);
                setEmail(text);
              }}
              isError={emailError !== null && !initial}
            />
          </View>
          <Button
            loading={loading}
            style={styles.button}
            onPress={() => {
              setInitial(false);
              if (emailError === null) {
                submit(email);
              }
            }}>
            Submit
          </Button>
          <View style={[styles.middleWrpaper, setMarginTop(25)]}>
            <Text fontSize={13}>Sudah punya akun? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text fontSize={13} semibold>
                Login di sini
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default RegisterScreen;
