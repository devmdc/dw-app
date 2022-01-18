import React from 'react';
import {FlatList, View, Image, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'component';
import {images} from 'assets';

import styles from './styles';

const MenuCollection = ({data = [1, 2, 3], logout}) => {
  const navigation = useNavigation();

  const menuAction = index => {
    switch (index) {
      case 1:
        navigation.navigate('Preference');
        break;
      case 2:
        navigation.navigate('Experience');
        break;
      case 3:
        navigation.navigate('ChangePassword');
        break;
      case 6:
        Alert.alert('Logout', 'Are you sure want to logout?', [
          {text: 'Tidak', style: 'cancel', onPress: () => {}},
          {
            text: 'Ya',
            style: 'destructive',
            onPress: () => {
              logout();
            },
          },
        ]);
        break;
      default:
        navigation.navigate('Setting');
        break;
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => menuAction(index)}>
        <View style={styles.container}>
          <Image
            style={styles.imgMenu}
            source={images[item.image]}
            resizeMode={'contain'}
          />
          <Text bold style={styles.txtName} fontSize={13}>
            {item.name}
          </Text>
          <Image
            style={styles.imgArrow}
            source={images.arrow}
            resizeMode={'contain'}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
};

export default MenuCollection;
