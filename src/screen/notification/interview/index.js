import React from 'react';
import {View} from 'react-native';
import {Text} from 'component';

import styles, {setMarginTop} from './styles';

const InterviewCollection = ({navigation}) => {
  return (
    <View>
      <Text style={[setMarginTop(50), styles.textInfo]} fontSize={13}>
        Interview
      </Text>
    </View>
  );
};

export default InterviewCollection;
