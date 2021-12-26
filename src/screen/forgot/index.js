import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Container, Button, Text, Input} from 'component';
import {images} from 'assets';
import {validate} from 'utils';

import styles, {setMarginTop} from './styles';

const ForgotScreen = ({navigation}) => {
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
          <Text style={[setMarginTop(50), styles.textInfo]} fontSize={13}>
            Masukkan email yang terdaftar di aplikasi.{'\n'}Kami akan
            mengirimkan kode verifikasi untuk{'\n'}ubah password.
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
            style={styles.button}
            onPress={() => {
              setInitial(false);
              if (emailError === null) {
                navigation.navigate('VerifyForgot');
              }
            }}>
            Submit
          </Button>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default ForgotScreen;
