import React from 'react';
import {View, FlatList} from 'react-native';

import styles from './styles';

import CardNotification from '../component/cardnotification';

const VacancyCollection = ({navigation}) => {
  const renderItem = ({item, index}) => {
    return <CardNotification />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentList}
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5]}
        keyExtractor={index => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default VacancyCollection;
