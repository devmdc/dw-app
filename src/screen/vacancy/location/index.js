import React from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Container, Header, Text, Loading, Input} from 'component';
import {images} from 'assets';

import styles, {setMarginTop} from './styles';
import CardPosLoc from '../component/cardposloc';

import useLocation from '../../profile/preference/location/useLocation';

const LocationScreen = ({navigation}) => {
  const {loading, location} = useLocation();

  const renderItem = ({item, index}) => {
    return (
      <CardPosLoc
        name={item.name}
        checked={item.check}
        onPress={check => console.log(check)}
      />
    );
  };

  return (
    <Container>
      <DropShadow style={[styles.shadowNavbar, {zIndex: 2}]}>
        <Header isBack logo />
      </DropShadow>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text bold style={[setMarginTop(10), styles.infoText]} fontSize={17}>
            Job Location
          </Text>
          <View style={[setMarginTop(20), styles.line]} />
          <Input
            style={[setMarginTop(20)]}
            placeholder={'Search again..'}
            rightIcon={
              <TouchableOpacity onPress={() => console.log('search')}>
                <Image
                  style={styles.imgInput}
                  source={images.search}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            }
          />
        </View>
        <View style={styles.wrapperList}>
          {loading && <Loading />}
          <FlatList
            contentContainerStyle={styles.contentList}
            showsVerticalScrollIndicator={false}
            data={loading ? [] : location}
            keyExtractor={index => index.toString()}
            renderItem={renderItem}
          />
        </View>
      </View>
    </Container>
  );
};

export default LocationScreen;
