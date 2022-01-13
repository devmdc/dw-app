import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Menu, {MenuItem} from 'react-native-material-menu';
import {Container, Button, Text, Input, Header} from 'component';
import {images, colors} from 'assets';
import {validate, formatDate} from 'utils';

import styles, {setMarginTop, genderData} from './styles';

import useSetting from './useSetting';
import useAddExp from '../experience/add/useAddExp';

const SettingScreen = ({route, navigation}) => {
  const {loading, data, education, submit} = useSetting();
  const {city} = useAddExp();

  const menuGender = useRef(null);
  const menuPosition = useRef(null);
  const menuLocation = useRef(null);

  const [inital, setInital] = useState(true);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [name, setName] = useState(data.full_name);
  const [birth, setBirth] = useState(data.dob);
  const [gender, setGender] = useState(data.gender);
  const [position, setPosition] = useState({id: 0, name: ''});
  const [location, setLocation] = useState({id: 0, name: ''});

  useEffect(() => {
    setName(data.full_name);
    setBirth(data.dob);
    setGender(data.gender);
    setPosition({
      id: data.last_education_id,
      name: data.last_education_text,
    });
    setLocation({
      id: data.city_id,
      name: data.city_name,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const openGenderSelection = () => {
    menuGender.current.show();
  };

  const selectGender = value => {
    setGender(value.name);
    menuGender.current.hide();
  };

  const openPositionSelection = () => {
    menuPosition.current.show();
  };

  const selectPosition = value => {
    setPosition(value);
    menuPosition.current.hide();
  };

  const openLocationSelection = () => {
    menuLocation.current.show();
  };

  const selectLocation = value => {
    setLocation(value);
    menuLocation.current.hide();
  };

  return (
    <Container>
      <DropShadow style={styles.shadowNavbar}>
        <Header isBack logo />
      </DropShadow>
      <View style={styles.wrapper}>
        <Text bold style={[setMarginTop(10), styles.infoText]} fontSize={17}>
          Profile Setting
        </Text>
        <View style={[setMarginTop(20), styles.line]} />
        <View style={styles.wrapperPict}>
          <Image
            source={{uri: data.photo}}
            style={styles.profilePict}
            resizeMode={'cover'}
          />
          <Text style={[styles.profileText]} fontSize={11}>
            Click the picture to change
          </Text>
        </View>
        <View style={styles.inputWrapper}>
          <Input
            style={styles.marginT}
            placeholder={'Type your name'}
            value={name}
            onChangeTextValue={text => {
              setName(text);
            }}
          />
          <Input
            style={styles.inputDisable}
            textStyle={{color: colors.dwBlack}}
            editable={false}
            pointerEvents={'none'}
            placeholder={'24/05/1996'}
            value={formatDate(birth, true)}
            rightIcon={
              <TouchableOpacity
                onPress={() => {
                  setDatePickerVisible(true);
                }}>
                <Image
                  source={images.calendar}
                  style={styles.icInput}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            }
          />
          <Menu
            ref={menuGender}
            style={styles.menu}
            button={
              <TouchableWithoutFeedback onPress={openGenderSelection}>
                <Input
                  style={styles.inputDisable}
                  textStyle={{color: colors.dwBlack}}
                  editable={false}
                  pointerEvents={'none'}
                  placeholder={'Select your gender'}
                  value={gender}
                />
              </TouchableWithoutFeedback>
            }>
            <ScrollView>
              {genderData.map((value, index) => (
                <MenuItem key={index} onPress={() => selectGender(value)}>
                  {value.name}
                </MenuItem>
              ))}
            </ScrollView>
          </Menu>
          <Menu
            ref={menuPosition}
            style={styles.menu}
            button={
              <TouchableWithoutFeedback onPress={openPositionSelection}>
                <Input
                  style={styles.inputDisable}
                  textStyle={{color: colors.dwBlack}}
                  editable={false}
                  pointerEvents={'none'}
                  placeholder={'Select your education'}
                  value={position.name}
                />
              </TouchableWithoutFeedback>
            }>
            <ScrollView>
              {education.map((value, index) => (
                <MenuItem key={index} onPress={() => selectPosition(value)}>
                  {value.name}
                </MenuItem>
              ))}
            </ScrollView>
          </Menu>
          <Menu
            ref={menuLocation}
            style={styles.menu}
            button={
              <TouchableWithoutFeedback onPress={openLocationSelection}>
                <Input
                  style={styles.inputDisable}
                  textStyle={{color: colors.dwBlack}}
                  editable={false}
                  pointerEvents={'none'}
                  placeholder={'Select your location'}
                  value={location.name}
                />
              </TouchableWithoutFeedback>
            }>
            <ScrollView>
              {city.map((value, index) => (
                <MenuItem key={index} onPress={() => selectLocation(value)}>
                  {value.name}
                </MenuItem>
              ))}
            </ScrollView>
          </Menu>
        </View>
        <Button
          loading={loading}
          style={styles.button}
          onPress={() => {
            setInital(false);
          }}>
          Update
        </Button>
      </View>

      <DateTimePickerModal
        isVisible={datePickerVisible}
        mode="date"
        onConfirm={date => {
          setDatePickerVisible(false);
          setBirth(date);
        }}
        onCancel={() => setDatePickerVisible(false)}
      />
    </Container>
  );
};

export default SettingScreen;
