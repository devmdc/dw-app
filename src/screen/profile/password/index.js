import React, {useState} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Container, Button, Text, Input, Header} from 'component';
import {images} from 'assets';
import {validate} from 'utils';
import {showMsgWarning} from 'api';

import styles, {setMarginTop} from './styles';

const ChangePasswordScreen = ({route, navigation}) => {
  const [initial, setInitial] = useState(true);

  const [oldPass, setOldPass] = useState({value: '', isShow: true});
  const [newPass, setNewPass] = useState({value: '', isShow: true});
  const [rePass, setRePass] = useState({value: '', isShow: true});

  const oldPassError = validate('password', oldPass.value);
  const newPassError = validate('password', newPass.value);
  const rePassError = validate('password', rePass.value);

  return (
    <Container>
      <DropShadow style={styles.shadowNavbar}>
        <Header isBack logo />
      </DropShadow>
      <View style={styles.wrapper}>
        <Text bold style={[setMarginTop(10), styles.infoText]} fontSize={17}>
          Change Password
        </Text>
        <View style={[setMarginTop(20), styles.line]} />
        <View style={styles.inputWrapper}>
          <Input
            style={styles.marginT}
            placeholder={'Type old password'}
            password={oldPass.isShow}
            onChangeTextValue={text => {
              setInitial(false);
              setOldPass({...oldPass, value: text});
            }}
            rightIcon={
              <TouchableOpacity
                onPress={() =>
                  setOldPass({...oldPass, isShow: !oldPass.isShow})
                }>
                <Image
                  source={oldPass.isShow ? images.eyeNo : images.eye}
                  style={styles.eye}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            }
            isError={oldPassError !== null && !initial}
          />
          <Input
            style={styles.marginT}
            placeholder={'Type new password'}
            password={newPass.isShow}
            onChangeTextValue={text => {
              setInitial(false);
              setNewPass({...newPass, value: text});
            }}
            rightIcon={
              <TouchableOpacity
                onPress={() =>
                  setNewPass({...newPass, isShow: !newPass.isShow})
                }>
                <Image
                  source={newPass.isShow ? images.eyeNo : images.eye}
                  style={styles.eye}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            }
            isError={newPassError !== null && !initial}
          />
          <Input
            style={styles.marginT}
            placeholder={'Confirm password'}
            password={rePass.isShow}
            onChangeTextValue={text => {
              setInitial(false);
              setRePass({...rePass, value: text});
            }}
            rightIcon={
              <TouchableOpacity
                onPress={() => setRePass({...rePass, isShow: !rePass.isShow})}>
                <Image
                  source={rePass.isShow ? images.eyeNo : images.eye}
                  style={styles.eye}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            }
            isError={rePassError !== null && !initial}
          />
        </View>
        <Button
          style={styles.button}
          onPress={() => {
            setInitial(false);
            if (
              oldPassError === null &&
              newPassError === null &&
              rePassError === null
            ) {
              if (newPass.value !== rePass.value) {
                showMsgWarning('Password are not matching');
              } else {
                console.log('submit');
              }
            }
          }}>
          Update
        </Button>
      </View>
    </Container>
  );
};

export default ChangePasswordScreen;
