import React from 'react';
import {View} from 'react-native';
import {Container, Text} from 'component';

import styles, {setMarginTop} from './styles';

const ProfileScreen = ({navigation}) => {
  return (
    <Container>
      <View>
        <Text style={[setMarginTop(50), styles.textInfo]} fontSize={13}>
          Profile
        </Text>
      </View>
    </Container>
  );
};

export default ProfileScreen;
