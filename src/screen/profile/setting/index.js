import React, {useState, useRef} from 'react';
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

import styles, {setMarginTop} from './styles';

import useSetting from './useSetting';

const SettingScreen = ({route, navigation}) => {
  const {loading, submit} = useSetting();

  const menuGender = useRef(null);
  const menuPosition = useRef(null);
  const menuLocation = useRef(null);

  const [inital, setInital] = useState(true);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('');
  const [position, setPosition] = useState('');
  const [location, setLocation] = useState('');

  const openGenderSelection = () => {
    menuGender.current.show();
  };

  const selectGender = value => {
    setGender(value);
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
            source={images.calendar}
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
                />
              </TouchableWithoutFeedback>
            }>
            <ScrollView>
              {[1, 2, 3, 4, 5, 6].map((value, index) => (
                <MenuItem key={index} onPress={() => selectGender(value)}>
                  {value}
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
                  placeholder={'Select your position'}
                />
              </TouchableWithoutFeedback>
            }>
            <ScrollView>
              {[1, 2, 3, 4, 5, 6].map((value, index) => (
                <MenuItem key={index} onPress={() => selectPosition(value)}>
                  {value}
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
                />
              </TouchableWithoutFeedback>
            }>
            <ScrollView>
              {[1, 2, 3, 4, 5, 6].map((value, index) => (
                <MenuItem key={index} onPress={() => selectLocation(value)}>
                  {value}
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
        }}
        onCancel={() => setDatePickerVisible(false)}
      />
    </Container>
  );
};

export default SettingScreen;
