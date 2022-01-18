import React, {useState} from 'react';
import {View} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Container, Button, Text, Header} from 'component';

import styles, {setMarginTop} from './styles';

import PreferenceTopNavigator from './navigation/PreferenceTopNavigator';

const PreferenceScreen = ({route, navigation}) => {
  const [initial, setInitial] = useState(true);

  return (
    <Container>
      <DropShadow style={styles.shadowNavbar}>
        <Header isBack logo />
      </DropShadow>
      <View style={styles.wrapper}>
        <Text bold style={[setMarginTop(10), styles.infoText]} fontSize={17}>
          Job Preference
        </Text>
        <View style={[setMarginTop(20), styles.line]} />
      </View>
      <PreferenceTopNavigator />
      <View style={styles.footer}>
        <Button
          style={styles.button}
          onPress={() => {
            setInitial(false);
          }}>
          Update
        </Button>
      </View>
    </Container>
  );
};

export default PreferenceScreen;
