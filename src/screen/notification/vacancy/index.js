import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {Loading} from 'component';
import {formatDate} from 'utils';
import {getColorAgenda, getTitleAgenda} from 'constant';

import styles from './styles';

import useVacancy from './useVacancy';

import CardNotification from '../component/cardnotification';

const VacancyCollection = ({navigation}) => {
  const {loading, data, fetchData} = useVacancy();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <CardNotification
        id={item.id}
        name={item.company_name}
        pos={item.job_position_name}
        location={item.city_name}
        workingDate={`${formatDate(item.date_start, true)} - ${formatDate(
          item.date_end,
          true,
        )}`}
        fee={item.payment}
        type={item.period}
        image={{uri: item.image}}
        status={getTitleAgenda(item.status)}
        statusBC={getColorAgenda(item.status)}
        onPress={() =>
          navigation.navigate('DetailVacancy', {id: item.id, uri: item.image})
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      {loading && <Loading />}
      <FlatList
        contentContainerStyle={styles.contentList}
        showsVerticalScrollIndicator={false}
        data={loading ? [] : data}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderItem}
      />
    </View>
  );
};

export default VacancyCollection;
