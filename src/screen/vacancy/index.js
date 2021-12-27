import React from 'react';
import {View} from 'react-native';
import {Container, Text} from 'component';

import styles, {setMarginTop} from './styles';

const VacancyScreen = ({navigation}) => {
  return (
    <Container>
      <View>
        <Text style={[setMarginTop(50), styles.textInfo]} fontSize={13}>
          Vacancies
        </Text>
      </View>
    </Container>
  );
};

export default VacancyScreen;
