import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DropShadow from 'react-native-drop-shadow';
import {Container, Header, Text, Input, Button, Loading} from 'component';
import {formatDate} from 'utils';
import {colors, images} from 'assets';
import {showMsgWarning} from 'api';

import styles, {setMarginTop} from './styles';
import CardVacancyRecent from './component/cardvacancyrecent';

import useVacancy from './useVacancy';

const VacancyScreen = ({navigation}) => {
  const {loading, data, checkDate} = useVacancy();

  const [datePickerVisible, setDatePickerVisible] = useState({
    status: false,
    isDateFirst: true,
  });
  const [position, setPosition] = useState({id: 0, name: ''});
  const [city, setCity] = useState({id: 0, name: ''});
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');

  useEffect(() => {
    if (dateEnd !== '' && !checkDate(dateStart, dateEnd)) {
      setDateEnd('');
      showMsgWarning('End date must bigger then start date');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateStart, dateEnd]);

  const renderItem = ({item, index}) => {
    return (
      <CardVacancyRecent
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

  return (
    <Container>
      <DropShadow style={[styles.shadowNavbar, {zIndex: 2}]}>
        <Header logo />
      </DropShadow>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrolView}>
        <View style={styles.container}>
          <DropShadow style={styles.shadowContent}>
            <View style={styles.headerWrapper}>
              <Text semibold style={[styles.textInfo]} fontSize={17}>
                Search Vacancy
              </Text>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Position', {setPosition})}>
                <Input
                  style={[setMarginTop(15), styles.inputDisable]}
                  textStyle={{color: colors.dwBlack}}
                  editable={false}
                  pointerEvents={'none'}
                  placeholder={'Job Position'}
                  value={position.name}
                />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Location', {setCity})}>
                <Input
                  style={[setMarginTop(15), styles.inputDisable]}
                  textStyle={{color: colors.dwBlack}}
                  editable={false}
                  pointerEvents={'none'}
                  placeholder={'Location / City'}
                  value={city.name}
                />
              </TouchableWithoutFeedback>
              <Text
                style={[setMarginTop(15), {color: colors.dwDarkGrey}]}
                fontSize={13}>
                Working Date
              </Text>
              <View style={styles.textWrapper}>
                <View style={{flex: 1}}>
                  <Input
                    style={styles.inputDateStart}
                    textStyle={{color: colors.dwBlack, fontSize: 12}}
                    editable={false}
                    pointerEvents={'none'}
                    placeholder={'00/00/00'}
                    value={formatDate(dateStart, true)}
                    rightIcon={
                      <TouchableOpacity
                        onPress={() =>
                          setDatePickerVisible({
                            ...datePickerVisible,
                            status: true,
                            isDateFirst: true,
                          })
                        }>
                        <Image
                          source={images.calendar}
                          style={styles.icInput}
                          resizeMode={'contain'}
                        />
                      </TouchableOpacity>
                    }
                  />
                </View>
                <Text
                  style={[{color: colors.dwDarkGrey, marginHorizontal: 8}]}
                  fontSize={11}>
                  TO
                </Text>
                <View style={{flex: 1}}>
                  <Input
                    style={styles.inputDateStart}
                    textStyle={{color: colors.dwBlack, fontSize: 12}}
                    editable={false}
                    pointerEvents={'none'}
                    placeholder={'00/00/00'}
                    value={formatDate(dateEnd, true)}
                    rightIcon={
                      <TouchableOpacity
                        onPress={() =>
                          setDatePickerVisible({
                            ...datePickerVisible,
                            status: true,
                            isDateFirst: false,
                          })
                        }>
                        <Image
                          source={images.calendar}
                          style={styles.icInput}
                          resizeMode={'contain'}
                        />
                      </TouchableOpacity>
                    }
                  />
                </View>
              </View>

              <Button
                style={[setMarginTop(15), styles.button]}
                onPress={() =>
                  navigation.navigate('Result', {
                    city: city,
                    position: position,
                    dtStart: formatDate(dateStart, true),
                    dtEnd: formatDate(dateEnd, true),
                  })
                }>
                Search
              </Button>
            </View>
          </DropShadow>

          {!loading && data.length > 0 && (
            <>
              <Text
                bold
                style={[setMarginTop(30), {color: colors.dwMainColor}]}
                fontSize={15}>
                Recent Vacancies
              </Text>
              <View style={[setMarginTop(15), styles.line]} />
            </>
          )}
          {loading && <Loading />}
          <FlatList
            contentContainerStyle={styles.contentList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={loading ? [] : data}
            keyExtractor={index => index.toString()}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>

      <DateTimePickerModal
        isVisible={datePickerVisible.status}
        mode="date"
        onConfirm={date => {
          setDatePickerVisible({...datePickerVisible, status: false});

          if (datePickerVisible.isDateFirst) {
            setDateStart(date);
          } else {
            setDateEnd(date);
          }
        }}
        onCancel={() =>
          setDatePickerVisible({...datePickerVisible, status: false})
        }
      />
    </Container>
  );
};

export default VacancyScreen;
