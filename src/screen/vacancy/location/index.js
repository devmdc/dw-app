import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Container, Header, Text, Loading, Input} from 'component';
import {images} from 'assets';

import styles, {setMarginTop} from './styles';
import CardPosLoc from '../component/cardposloc';

import useSearchLocation from './useSearchLocation';

const LocationScreen = ({route, navigation}) => {
  const {setCity} = route.params || {};
  const {loading, location, search} = useSearchLocation();

  const [key, setKey] = useState('');

  const renderItem = ({item, index}) => {
    return (
      <CardPosLoc
        name={item.name}
        onPress={check => {
          setCity({id: item.id, name: item.name});
          navigation.goBack();
        }}
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
              <TouchableOpacity onPress={() => search(key.toLowerCase())}>
                <Image
                  style={styles.imgInput}
                  source={images.search}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            }
            onChangeTextValue={text => {
              setKey(text);
              search(text.toLowerCase());
            }}
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
