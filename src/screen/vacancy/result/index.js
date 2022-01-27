import React, {useEffect} from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Container, Header, Text, Loading} from 'component';
import {formatDate} from 'utils';
import {colors, images} from 'assets';

import styles, {setMarginTop} from './styles';
import CardResult from '../component/cardvacancyresult';

import useSearchResult from './useSearchResult';

const ResultScreen = ({route, navigation}) => {
  const {city, position, dtStart, dtEnd} = route.params || {};
  const {id: cID, name: cName} = city || {};
  const {id: jpID, name: jpName} = position || {};

  const {loading, data, count, getdata} = useSearchResult();

  useEffect(() => {
    getdata(cID, jpID, dtStart, dtEnd);
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
      />
    );
  };

  const renderParam = () => {
    if (!cName && !jpName && !dtStart && !dtEnd) {
      return;
    }

    return (
      <Text
        medium
        style={[setMarginTop(3), {color: colors.dwGrey}]}
        fontSize={11}>
        {cName && (
          <Text style={[{color: colors.dwGrey}]} fontSize={11}>
            {`${cName}, `}
          </Text>
        )}
        {jpName && (
          <Text style={[{color: colors.dwGrey}]} fontSize={11}>
            {`${jpName}, `}
          </Text>
        )}
        {dtStart && (
          <Text style={[{color: colors.dwGrey}]} fontSize={11}>
            {`${formatDate(dtStart, true)}`}
          </Text>
        )}
        {dtEnd && (
          <Text style={[{color: colors.dwGrey}]} fontSize={11}>
            {` - ${formatDate(dtEnd, true)}`}
          </Text>
        )}
      </Text>
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
              Found {count} job/vacancies
            </Text>
            {renderParam()}
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
            data={loading ? [] : data}
            keyExtractor={index => index.toString()}
            renderItem={renderItem}
          />
        </View>
      </View>
    </Container>
  );
};

export default ResultScreen;
