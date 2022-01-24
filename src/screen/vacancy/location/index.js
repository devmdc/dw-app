import React from 'react';
import {View} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Container, Header, Text} from 'component';

import styles, {setMarginTop} from './styles';
import CardPosLoc from '../component/cardposloc';

const NotificationScreen = ({navigation}) => {
  return (
    <Container>
      <DropShadow style={[styles.shadowNavbar, {zIndex: 2}]}>
        <Header isBack logo />
      </DropShadow>
      <View style={styles.container}>
        <Text style={[setMarginTop(50), styles.textInfo]} fontSize={13}>
          Location
        </Text>
      </View>
    </Container>
  );
};

export default NotificationScreen;
