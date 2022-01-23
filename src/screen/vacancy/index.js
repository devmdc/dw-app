import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DropShadow from 'react-native-drop-shadow';
import {Container, Header, Text, Input, Button} from 'component';
import {formatDate} from 'utils';
import {colors, images} from 'assets';
import {showMsgWarning} from 'api';

import styles, {setMarginTop} from './styles';
import useVacancy from './useVacancy';

const VacancyScreen = ({navigation}) => {
  const {checkDate} = useVacancy();

  const [datePickerVisible, setDatePickerVisible] = useState({
    status: false,
    isDateFirst: true,
  });
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');

  useEffect(() => {
    if (dateEnd !== '' && !checkDate(dateStart, dateEnd)) {
      setDateEnd('');
      showMsgWarning('End date must bigger then start date');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateStart, dateEnd]);

  return (
    <Container>
      <DropShadow style={[styles.shadowNavbar, {zIndex: 2}]}>
        <Header logo />
      </DropShadow>
      <View style={styles.container}>
        <DropShadow style={styles.shadowContent}>
          <View style={styles.headerWrapper}>
            <Text semibold style={[styles.textInfo]} fontSize={17}>
              Search Vacancy
            </Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Position')}>
              <Input
                style={[setMarginTop(15), styles.inputDisable]}
                editable={false}
                pointerEvents={'none'}
                placeholder={'Job Position'}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Location')}>
              <Input
                style={[setMarginTop(15), styles.inputDisable]}
                editable={false}
                pointerEvents={'none'}
                placeholder={'Location / City'}
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

            <Button style={[setMarginTop(15), styles.button]}>Search</Button>
          </View>
        </DropShadow>
      </View>

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
