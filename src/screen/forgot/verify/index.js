import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import OtpInputs from 'react-native-otp-inputs';
import {Container, Button, Text} from 'component';
import {images} from 'assets';

import styles, {setMarginTop} from './styles';
import useForgot from '../useForgot';

const VerifyForgotScreen = ({route, navigation}) => {
  const {email} = route.params;

  const {loading, verify} = useForgot();

  const [code, setCode] = useState('');

  return (
    <Container>
      <KeyboardAwareScrollView>
        <View style={styles.wrapper}>
          <Image
            source={images.logoTitle}
            style={styles.logoTitle}
            resizeMode={'contain'}
          />
          <Text style={[setMarginTop(50), styles.infoText]} fontSize={13}>
            Kami sudah mengirimkan email verifikasi{'\n'}berupa 5 digit angka.
            Silakan cek email{'\n'}
            <Text fontSize={13} semibold>
              andy@gmail.com
            </Text>
          </Text>
          <View style={styles.inputWrapper}>
            <OtpInputs
              handleChange={text => setCode(text)}
              style={styles.otp}
              autofillFromClipboard={false}
              numberOfInputs={5}
              inputContainerStyles={styles.inputContainerStyles}
              inputStyles={styles.inputStyles}
            />
          </View>
          <Button
            loading={loading}
            style={styles.button}
            onPress={() => {
              if (code.length > 4) {
                verify(email, code);
              }
            }}>
            Verifikasi
          </Button>
          <View style={[styles.middleWrpaper, setMarginTop(25)]}>
            <Text fontSize={13}>Tidak menerima kode? </Text>
            <TouchableOpacity onPress={() => console.log('coba lagi')}>
              <Text fontSize={13} semibold>
                Coba lagi
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default VerifyForgotScreen;
