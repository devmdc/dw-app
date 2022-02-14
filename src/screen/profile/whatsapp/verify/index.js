import React, {useState} from 'react';
import {View} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Container, Button, Text, Input, Header} from 'component';

import styles, {setMarginTop} from './styles';

import useWhatsappVerify from './useWhatsappVerify';

const WhatsappVerifyScreen = ({route, navigation}) => {
  const {number} = route.params;

  const {loading, submit} = useWhatsappVerify();

  const [code, setCode] = useState('');

  return (
    <Container needTouchOutside>
      <DropShadow style={styles.shadowNavbar}>
        <Header isBack logo />
      </DropShadow>
      <View style={styles.wrapper}>
        <Text bold style={[setMarginTop(10), styles.infoText]} fontSize={17}>
          Code
        </Text>
        <View style={[setMarginTop(20), styles.line]} />
        <Text style={[setMarginTop(20), styles.infoText]} fontSize={13}>
          We have sent a verification code{'\n'}to your whatsapp number. Please
          check!
        </Text>
        <View style={styles.inputWrapper}>
          <Input editable={false} value={number} />
          <Input
            keyboardType={'number-pad'}
            style={styles.marginT}
            placeholder={'Verify code'}
            onChangeTextValue={text => {
              setCode(text);
            }}
          />
        </View>
        <Button
          loading={loading}
          style={styles.button}
          onPress={() => {
            submit(number, code);
          }}>
          Update
        </Button>
      </View>
    </Container>
  );
};

export default WhatsappVerifyScreen;
