import React, {useEffect} from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Container, Header, Text, Loading} from 'component';
import {formatDate} from 'utils';
import {colors, images} from 'assets';

import styles from './styles';
import CardResult from '../component/cardvacancyresult';

import useVacancy from '../useVacancy';

const MoreScreen = ({route, navigation}) => {
  const {title} = route.params || {};
  const isRecent = title.includes('Recent');

  const {loading, dataRecent, dataSuggest, getSuggestData, getRecentData} =
    useVacancy();

  useEffect(() => {
    if (isRecent) {
      getRecentData(100);
    } else {
      getSuggestData(100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <CardResult
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
        onPress={() =>
          navigation.navigate('DetailVacancy', {id: item.id, uri: item.image})
        }
      />
    );
  };

  return (
    <Container>
      <DropShadow style={[styles.shadowNavbar, {zIndex: 2}]}>
        <Header isBack logo />
      </DropShadow>
      <View style={styles.container}>
        <View style={[styles.wrapper]}>
          <View style={styles.wrapInfo}>
            <Text semibold style={[{color: colors.dwDarkGrey}]} fontSize={15}>
              Found {isRecent ? dataRecent.length : dataSuggest.length}{' '}
              job/vacancies
            </Text>
            <Text style={[{color: colors.dwGrey}]} fontSize={11}>
              {title}
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={images.searchBack}
              style={styles.searchIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapperList}>
          {loading && <Loading />}
          <FlatList
            contentContainerStyle={styles.contentList}
            showsVerticalScrollIndicator={false}
            data={loading ? [] : isRecent ? dataRecent : dataSuggest}
            keyExtractor={index => index.toString()}
            renderItem={renderItem}
          />
        </View>
      </View>
    </Container>
  );
};

export default MoreScreen;
