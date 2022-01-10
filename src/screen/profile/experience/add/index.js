import React, {useState, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import Menu, {MenuItem} from 'react-native-material-menu';
import {Container, Text, Header, Input} from 'component';
import {validate} from 'utils';
import {colors, images} from 'assets';

import styles, {setMarginTop, sampleperiod, width} from './styles';

const AddExperienceScreen = ({navigation}) => {
  const menu = useRef(null);

  const [initial, setInitial] = useState(true);
  const [name, setName] = useState('');
  const [pos, setPos] = useState('');
  const [city, setCity] = useState('');
  const [dateOne, setDateOne] = useState('');
  const [dateTwo, setDateTwo] = useState('');
  const [fee, setFee] = useState('');
  const [period, setPeriod] = useState('');

  const nameError = validate('name', name);
  const posError = validate('position', pos);
  const cityError = validate('city', city);
  const dateOneError = validate('general', dateOne);
  const dateTwoError = validate('general', dateTwo);
  const feeError = validate('general', fee);
  const periodError = validate('general', period);

  const openPeriodSelection = () => {
    menu.current.show();
  };

  const selectPeriod = value => {
    setInitial(false);
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
            setInitial(false);
            setName(text);
          }}
          isError={nameError !== null && !initial}
        />
        <Input
          style={setMarginTop(16)}
          placeholder={'Job Position'}
          onChangeTextValue={text => {
            setInitial(false);
            setPos(text);
          }}
          isError={posError !== null && !initial}
        />
        <Input
          style={setMarginTop(16)}
          placeholder={'City'}
          onChangeTextValue={text => {
            setInitial(false);
            setCity(text);
          }}
          isError={cityError !== null && !initial}
        />
        <Text
          style={[setMarginTop(25), {color: colors.dwDarkGrey}]}
          fontSize={13}>
          Working Date
        </Text>
        <View style={styles.textWrapper}>
          <Input
            style={{flex: 1, marginRight: 5}}
            placeholder={'00/00/00'}
            onChangeTextValue={text => {
              setInitial(false);
              setDateOne(text);
            }}
            rightIcon={
              <TouchableOpacity onPress={() => console.log('calendar 1')}>
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
            style={{flex: 1, marginLeft: 5}}
            placeholder={'00/00/00'}
            onChangeTextValue={text => {
              setInitial(false);
              setDateTwo(text);
            }}
            rightIcon={
              <TouchableOpacity onPress={() => console.log('calendar 2')}>
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
              setInitial(false);
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
                  style={{
                    width: width - 225,
                    marginLeft: 5,
                    backgroundColor: colors.dwWhite,
                  }}
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
    </Container>
  );
};

export default AddExperienceScreen;
