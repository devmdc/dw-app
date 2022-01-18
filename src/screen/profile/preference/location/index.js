import React from 'react';
import {View} from 'react-native';
import {Text} from 'component';

import styles, {setMarginTop} from './styles';

const LocationCollection = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={[setMarginTop(50), styles.textInfo]} fontSize={13}>
        Position
      </Text>
    </View>
  );
};

export default LocationCollection;
