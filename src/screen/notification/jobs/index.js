import React from 'react';
import {View} from 'react-native';
import {Text} from 'component';

import styles, {setMarginTop} from './styles';

const JobCollection = ({navigation}) => {
  return (
    <View>
      <Text style={[setMarginTop(50), styles.textInfo]} fontSize={13}>
        Jobs
      </Text>
    </View>
  );
};

export default JobCollection;
