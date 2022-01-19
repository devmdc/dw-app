import React from 'react';
import {View, FlatList} from 'react-native';
import {Loading} from 'component';

import styles from './styles';

import CardJobPreference from '../component/cardjp';

import useLocation from './useLocation';

const LocationCollection = ({navigation}) => {
  const {loading, location, saveData} = useLocation();

  const renderItem = ({item, index}) => {
    return (
      <CardJobPreference
        name={item.name}
        onPress={check => saveData(check, item)}
      />
    );
  };

  return (
    <View style={styles.container}>
      {loading && <Loading />}
      <FlatList
        contentContainerStyle={styles.contentList}
        showsVerticalScrollIndicator={false}
        data={loading ? [] : location}
        keyExtractor={index => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default LocationCollection;
