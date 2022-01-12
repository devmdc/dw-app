import React, {useState, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DropShadow from 'react-native-drop-shadow';
import Menu, {MenuItem} from 'react-native-material-menu';
import {Container, Text, Header, Input} from 'component';
import {validate} from 'utils';
import {colors, images} from 'assets';

import styles, {setMarginTop, sampleperiod, width} from './styles';
import useAddExp from './useAddExp';

const AddExperienceScreen = ({route, navigation}) => {
  const {
    name: rName,
    pos: rPos,
    city: rCity,
    startDate,
    endDate,
    fee: rFee,
    period: rPeriod,
  } = route.params;

  const {loading, city: dtCity} = useAddExp();

  const menuPos = useRef(null);
  const menuCity = useRef(null);
  const menu = useRef(null);

  const [initial, setInitial] = useState(true);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [name, setName] = useState(rName || '');
  const [pos, setPos] = useState(rPos || '');
  const [city, setCity] = useState(rCity || '');
  const [dateOne, setDateOne] = useState(startDate || '');
  const [dateTwo, setDateTwo] = useState(endDate || '');
  const [fee, setFee] = useState(rFee || '');
  const [period, setPeriod] = useState(rPeriod || '');

  const nameError = validate('name', name);
  const posError = validate('position', pos);
  const cityError = validate('city', city);
  const dateOneError = validate('general', dateOne);
  const dateTwoError = validate('general', dateTwo);
  const feeError = validate('general', fee);
  const periodError = validate('general', period);

  const openPosSelection = () => {
    menuPos.current.show();
  };

  const selectPos = value => {
    setPos(value.name);
    menuPos.current.hide();
  };

  const openCitySelection = () => {
    menuCity.current.show();
  };

  const selectCity = value => {
    setCity(value.name);
    menuCity.current.hide();
  };

  const openPeriodSelection = () => {
    menu.current.show();
  };

  const selectPeriod = value => {
    setPeriod(value.name);
    menu.current.hide();
  };

  return (
    <Container>
      <DropShadow style={styles.shadowNavbar}>
        <Header isBack logo />
      </DropShadow>
      <View style={styles.header}>
        <Text bold style={styles.textInfo} fontSize={17}>
          Add Job Experience
        </Text>
        <View style={[setMarginTop(20), styles.line]} />
      </View>
      <View style={styles.inputWrapper}>
        <Input
          placeholder={'Company name'}
          onChangeTextValue={text => {
            setName(text);
          }}
          isError={nameError !== null && !initial}
        />
        <Menu
          ref={menuPos}
          style={styles.menuCity}
          button={
            <TouchableWithoutFeedback onPress={openPosSelection}>
              <Input
                style={[setMarginTop(16), styles.inputPosition]}
                textStyle={{color: colors.dwBlack}}
                editable={false}
                pointerEvents={'none'}
                placeholder={'Job Position'}
                value={pos}
                isError={posError !== null && !initial}
              />
            </TouchableWithoutFeedback>
          }>
          <ScrollView>
            {dtCity.map((value, index) => (
              <MenuItem key={index} onPress={() => selectPos(value)}>
                {value.name}
              </MenuItem>
            ))}
          </ScrollView>
        </Menu>
        <Menu
          ref={menuCity}
          style={styles.menuCity}
          button={
            <TouchableWithoutFeedback onPress={openCitySelection}>
              <Input
                style={[setMarginTop(16), styles.inputCity]}
                textStyle={{color: colors.dwBlack}}
                editable={false}
                pointerEvents={'none'}
                placeholder={'City'}
                value={city}
                isError={cityError !== null && !initial}
              />
            </TouchableWithoutFeedback>
          }>
          <ScrollView>
            {dtCity.map((value, index) => (
              <MenuItem key={index} onPress={() => selectCity(value)}>
                {value.name}
              </MenuItem>
            ))}
          </ScrollView>
        </Menu>
        <Text
          style={[setMarginTop(25), {color: colors.dwDarkGrey}]}
          fontSize={13}>
          Working Date
        </Text>
        <View style={styles.textWrapper}>
          <Input
            style={styles.inputDateStart}
            textStyle={{color: colors.dwBlack}}
            editable={false}
            pointerEvents={'none'}
            placeholder={'00/00/00'}
            rightIcon={
              <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
                <Image
                  source={images.calendar}
                  style={styles.icInput}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            }
            isError={dateOneError !== null && !initial}
          />
          <Input
            style={styles.inputDateEnd}
            textStyle={{color: colors.dwBlack}}
            editable={false}
            pointerEvents={'none'}
            placeholder={'00/00/00'}
            rightIcon={
              <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
                <Image
                  source={images.calendar}
                  style={styles.icInput}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            }
            isError={dateTwoError !== null && !initial}
          />
        </View>
        <Text
          style={[setMarginTop(25), {color: colors.dwDarkGrey}]}
          fontSize={13}>
          Payment (IDR)
        </Text>
        <View style={styles.textWrapper}>
          <Input
            style={{width: width - 225, marginRight: 5}}
            placeholder={'0'}
            onChangeTextValue={text => {
              setFee(text);
            }}
            isError={feeError !== null && !initial}
          />
          <Text
            style={[{color: colors.dwDarkGrey, alignSelf: 'center'}]}
            fontSize={13}>
            {` / `}
          </Text>
          <Menu
            ref={menu}
            style={styles.menu}
            button={
              <TouchableWithoutFeedback onPress={openPeriodSelection}>
                <Input
                  style={styles.inputPeriod}
                  textStyle={{color: colors.dwBlack}}
                  value={period}
                  placeholder={'Period'}
                  editable={false}
                  pointerEvents={'none'}
                  isError={periodError !== null && !initial}
                />
              </TouchableWithoutFeedback>
            }>
            <ScrollView>
              {sampleperiod.map((value, index) => (
                <MenuItem key={index} onPress={() => selectPeriod(value)}>
                  {value.name}
                </MenuItem>
              ))}
            </ScrollView>
          </Menu>
        </View>
      </View>

      <DateTimePickerModal
        isVisible={datePickerVisible}
        mode="date"
        onConfirm={date => {
          setDatePickerVisible(false);
        }}
        onCancel={() => setDatePickerVisible(false)}
      />
    </Container>
  );
};

export default AddExperienceScreen;
