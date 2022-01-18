import React from 'react';
import {View, FlatList} from 'react-native';
import {Loading} from 'component';

import styles from './styles';

import CardJobPreference from '../component/cardjp';

import usePosition from './usePosition';

const PositionCollection = ({navigation}) => {
  const {loading, position} = usePosition();

  const renderItem = ({item, index}) => {
    return <CardJobPreference name={item.name} />;
  };

  return (
    <View style={styles.container}>
      {loading && <Loading />}
      <FlatList
        contentContainerStyle={styles.contentList}
        showsVerticalScrollIndicator={false}
        data={loading ? [] : position}
        keyExtractor={index => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default PositionCollection;
