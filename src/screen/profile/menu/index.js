import React from 'react';
import {FlatList, View, Image} from 'react-native';
import {Text} from 'component';
import {images} from 'assets';

import styles from './styles';

const MenuCollection = ({data = [1, 2, 3]}) => {
  const renderItem = ({item, index}) => {
    return (
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
