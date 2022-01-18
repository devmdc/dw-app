import React from 'react';
import {View, FlatList} from 'react-native';

import styles from './styles';

import CardJobPreference from '../component/cardjp';

const PositionCollection = ({navigation}) => {
  const renderItem = ({item, index}) => {
    return <CardJobPreference name={'Customer Service'} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentList}
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3]}
        keyExtractor={index => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default PositionCollection;
