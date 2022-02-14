import React, {useState} from 'react';
import {View} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Container, Button, Text, Input, Header} from 'component';

import styles, {setMarginTop} from './styles';

import useWhatsapp from './useWhatsapp';

const WhatsappScreen = ({route, navigation}) => {
  const {oldNumber} = route.params;

  const {loading, submit} = useWhatsapp();

  const [phone, setPhone] = useState('');

  return (
    <Container>
      <DropShadow style={styles.shadowNavbar}>
        <Header isBack logo />
      </DropShadow>
      <View style={styles.wrapper}>
        <Text bold style={[setMarginTop(10), styles.infoText]} fontSize={17}>
          Update Whatsapp
        </Text>
        <View style={[setMarginTop(20), styles.line]} />
        <Text style={[setMarginTop(20), styles.infoText]} fontSize={13}>
          Type your whatsapp number
        </Text>
        <View style={styles.inputWrapper}>
          <Input editable={false} value={oldNumber} />
          <Input
            style={styles.marginT}
            placeholder={'New Number'}
            onChangeTextValue={text => {
              setPhone(text);
            }}
          />
        </View>
        <Button
          loading={loading}
          style={styles.button}
          onPress={() => {
            if (phone.length > 4) {
              submit(phone);
            }
          }}>
          Update
        </Button>
      </View>
    </Container>
  );
};

export default WhatsappScreen;
