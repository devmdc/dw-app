import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import DropShadow from 'react-native-drop-shadow';
import {Container, Header, Text, Input} from 'component';
import {colors, images} from 'assets';

import styles from './styles';
import MenuCollection from './menu';
import useProfile from './useProfile';

const ProfileScreen = ({navigation}) => {
  let data = require('./menu/menu.json');

  const {logout} = useProfile();

  const {name, email, whatsapp} = useSelector(state => ({
    name: state.user.data.full_name,
    email: state.user.data.email,
    whatsapp: state.user.data.whatsapp,
  }));

  return (
    <Container color={colors.dwSoftGrey}>
      <DropShadow style={styles.shadowNavbar}>
        <Header logo />
      </DropShadow>
      <View style={styles.wrapper}>
        <View style={styles.wrapperProfile}>
          <Image
            style={styles.imgProfile}
            source={images.profile}
            resizeMode={'cover'}
          />
          <Text bold style={styles.txtName} fontSize={13}>
            {name}
          </Text>
          <Input editable={false} value={email} />
          <Input
            style={styles.marginT}
            placeholder={whatsapp}
            onChangeTextValue={text => {
              console.log(text);
            }}
            rightIcon={
              <TouchableOpacity onPress={() => console.log('edit')}>
                <Text bold fontSize={13}>
                  Edit
                </Text>
              </TouchableOpacity>
            }
          />
        </View>
        <MenuCollection data={data} logout={logout} />
      </View>
    </Container>
  );
};

export default ProfileScreen;
