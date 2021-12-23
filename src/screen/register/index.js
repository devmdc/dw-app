import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Container, Button, Text, Input} from 'component';
import {images} from 'assets';

import styles, {setMarginTop} from './styles';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');

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
              onChangeTextValue={text => setEmail(text)}
            />
          </View>
          <Button style={styles.button}>Submit</Button>
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
