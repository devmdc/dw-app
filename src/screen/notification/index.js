import React from 'react';
import {View} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Container, Text, Header} from 'component';

import styles, {setMarginTop} from './styles';

import NotificationTopNavigator from './navigation/NotificationTopNavigator';

const NotificationScreen = ({route, navigation}) => {
  return (
    <Container>
      <DropShadow style={styles.shadowNavbar}>
        <Header logo />
      </DropShadow>
      <NotificationTopNavigator />
    </Container>
  );
};

export default NotificationScreen;
