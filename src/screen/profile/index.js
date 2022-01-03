import React from 'react';
import {View} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Container, Header, Text} from 'component';

import styles, {setMarginTop} from './styles';

const ProfileScreen = ({navigation}) => {
  return (
    <Container>
      <DropShadow style={styles.shadowNavbar}>
        <Header logo />
      </DropShadow>
      {/* <View>
        <Text style={[setMarginTop(50), styles.textInfo]} fontSize={13}>
          Profile
        </Text>
      </View> */}
    </Container>
  );
};

export default ProfileScreen;
