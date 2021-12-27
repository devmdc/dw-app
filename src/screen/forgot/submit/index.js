import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Container, Button, Text, Input} from 'component';
import {images} from 'assets';
import {validate} from 'utils';
import {useHttp} from 'api';

import styles, {setMarginTop} from './styles';
import useForgot from '../useForgot';

const ForgotDataScreen = ({route, navigation}) => {
  const {email, code} = route.params;

  const {loading, submitData} = useForgot();

  const {showMsgWarning} = useHttp();

  const [initial, setInitial] = useState(true);
  const [password, setPassword] = useState({value: '', isShow: true});
  const [rePassword, setRePassword] = useState({value: '', isShow: true});

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
            Ketik password lama dan ubah password.
          </Text>
          <View style={styles.inputWrapper}>
            <Input
              password={password.isShow}
              placeholder={'Type password'}
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
            loading={loading}
            style={styles.button}
            onPress={() => {
              setInitial(false);
              if (passError === null && rePassError === null) {
                if (password !== rePassError) {
                  showMsgWarning('Password are not matching');
                } else {
                  submitData(email, code, password);
                }
              }
            }}>
            Ubah Password
          </Button>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default ForgotDataScreen;
