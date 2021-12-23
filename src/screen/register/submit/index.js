import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Container, Button, Text, Input} from 'component';
import {images} from 'assets';
import {validate} from 'utils';

import styles, {setMarginTop} from './styles';

const RegisterDataScreen = ({navigation}) => {
  const [initial, setInitial] = useState(true);
  const [name, setName] = useState('');
  const [password, setPassword] = useState({value: '', isShow: true});
  const [rePassword, setRePassword] = useState({value: '', isShow: true});

  const nameError = validate('name', name);
  const passError = validate('password', password.value);
  const rePassError = validate('password', rePassword.value);

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
            Ketik nama dan password
          </Text>
          <View style={styles.inputWrapper}>
            <Input
              placeholder={'Type your name'}
              onChangeTextValue={text => {
                setInitial(false);
                setName(text);
              }}
              isError={nameError !== null && !initial}
            />
            <Input
              password={password.isShow}
              placeholder={'Type password'}
              style={setMarginTop(15)}
              rightIcon={
                <TouchableOpacity
                  onPress={() =>
                    setPassword({...password, isShow: !password.isShow})
                  }>
                  <Image
                    source={password.isShow ? images.eyeNo : images.eye}
                    style={styles.eye}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
              }
              onChangeTextValue={text => {
                setInitial(false);
                setPassword({...password, value: text});
              }}
              isError={passError !== null && !initial}
            />
            <Input
              password={rePassword.isShow}
              placeholder={'Retype password'}
              style={setMarginTop(15)}
              rightIcon={
                <TouchableOpacity
                  onPress={() =>
                    setRePassword({...rePassword, isShow: !rePassword.isShow})
                  }>
                  <Image
                    source={rePassword.isShow ? images.eyeNo : images.eye}
                    style={styles.eye}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
              }
              onChangeTextValue={text => {
                setInitial(false);
                setRePassword({...password, value: text});
              }}
              isError={rePassError !== null && !initial}
            />
          </View>
          <Button
            style={styles.button}
            onPress={() => {
              setInitial(false);
              if (
                nameError === null &&
                passError === null &&
                rePassError === null
              ) {
                navigation.navigate('Register');
              }
            }}>
            Register
          </Button>
          <View style={[styles.middleWrpaper, setMarginTop(25)]}>
            <Text style={styles.textFooter} fontSize={13}>
              "Dengan klik register, anda menyetujui{'\n'}syarat dan ketentuan
              yang berlaku"
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default RegisterDataScreen;
